import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailModal } from '@components/common/modal/DetailModal';
import * as S from './MemoPage.Style';
import { getFormattedDate } from '@/utils/dateUtils';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';
import BackIcon from '@icons/ArrowIcon.svg';
import FolderIcon from '@icons/FolderIcon.svg';
import { CategoryChip } from '@/components/common/chip/CategoryChip';
import { postRecord } from '@/api/Record';
import { getFolders } from '@/api/Folder';

interface FolderType {
  folderId: number;
  title: string;
}

export const MemoPage = () => {
  const navigate = useNavigate();
  const [folderList, setFolderList] = useState<FolderType[]>([]);
  const [tempMemo, setTempMemo] = useState({
    title: '',
    category: '',
    folderId: 0,
    memo: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showTempDataModal, setShowTempDataModal] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 폴더 목록 가져오기
  useEffect(() => {
    const fetchFolders = async () => {
      const response = await getFolders();
      if (response) {
        setFolderList(response);
      }
    };
    fetchFolders();
  }, [isBottomSheetOpen]);

  useEffect(() => {
    const savedMemo = localStorage.getItem('tempMemo');
    if (savedMemo) {
      setTempMemo(JSON.parse(savedMemo));
      setShowTempDataModal(true);
    }
  }, []);

  const saveTempMemo = () => {
    const titleToSave = tempMemo.title || getFormattedDate();
    if (tempMemo.title && tempMemo.memo) {
      localStorage.setItem(
        'tempMemo',
        JSON.stringify({
          ...tempMemo,
          title: titleToSave,
        }),
      );
    }
  };

  const handleBackButton = () => {
    if ((tempMemo.title || getFormattedDate()) && tempMemo.memo) {
      saveTempMemo();
      setShowModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTempMemo((prev) => ({ ...prev, title: newTitle }));
    saveTempMemo();
  };

  const handleChangeCategory = (folder: FolderType | '새 폴더 추가하기') => {
    if (folder === '새 폴더 추가하기') {
      setIsBottomSheetOpen(true);
    } else {
      setTempMemo((prev) => ({
        ...prev,
        category: folder.title,
        folderId: folder.folderId,
      }));
      saveTempMemo();
    }
  };

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setTempMemo((prev) => ({ ...prev, memo: newMemo }));
    saveTempMemo();
  };

  const handleSaveButton = async () => {
    try {
      const response = await postRecord({
        title: tempMemo.title || getFormattedDate(),
        content: tempMemo.memo,
        folderId: tempMemo.folderId || 1, // 임시 폴더 아이디, 선택된 폴더 아이디로 변경 필요!
        recordType: 'MEMO',
      });
      if (response) {
        clearTempMemo();
        navigate('/');
      }
    } catch (error) {
      console.error('메모 기록 실패', error);
    }
  };

  const restoreTempMemo = () => {
    if (tempMemo) {
      setTempMemo(tempMemo);
    }
    setShowModal(false);
  };

  const clearTempMemo = () => {
    localStorage.removeItem('tempMemo');
    setShowModal(false);
    navigate('/');
  };

  const handleNewMemo = () => {
    localStorage.removeItem('tempMemo');
    setTempMemo({ title: '', category: '', folderId: 0, memo: '' });
    setShowTempDataModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isSaveDisabled = !tempMemo.memo;

  // function handleBottomSheetComplete(): void {
  //   setIsBottomSheetOpen(false);
  // }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.BackButton onClick={handleBackButton} type="button">
          <img src={BackIcon} alt="뒤로가기" />
        </S.BackButton>
        <S.Title>
          오늘은 무슨 경험을 하셨나요?
          <br />
          자유롭게 기록해주세요!
        </S.Title>
      </S.HeaderContainer>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder={getFormattedDate()}
          value={tempMemo.title}
          onChange={handleChangeTitle}
          isError={false}
        />
        <S.Line />
        <S.Content
          placeholder="경험 당시의 상황, 행동, 문제, 결과 등을 기록해주세요."
          value={tempMemo.memo}
          onChange={handleChangeMemo}
          maxLength={500}
        />
        <S.Count>{tempMemo.memo.length}/500</S.Count>
        <S.Line />
        <S.Label>경험의 카테고리를 선택해주세요.</S.Label>
        <S.CategoryContainer>
          {folderList.map((folder) => (
            <CategoryChip
              key={folder.folderId}
              children={folder.title}
              isSelected={tempMemo.category === folder.title}
              onClick={() => handleChangeCategory(folder)}
            />
          ))}
          <CategoryChip onClick={() => handleChangeCategory('새 폴더 추가하기')} isSelected={false}>
            <img src={FolderIcon} alt="changeFolder" />
          </CategoryChip>
        </S.CategoryContainer>
        <S.ButtonWrapper>
          <Button
            type="button"
            onClick={handleSaveButton}
            styleType={'basic'}
            disabled={isSaveDisabled}
          >
            저장하기
          </Button>
        </S.ButtonWrapper>
      </S.Form>

      {showModal && (
        <DetailModal
          text="작성 중인 내용을 임시 저장할까요?"
          description="새로 작성하면 기존 기록은 삭제돼요."
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickBackground={() => setShowModal(false)}
          onClickLeft={clearTempMemo}
          onClickRight={restoreTempMemo}
        />
      )}
      {showTempDataModal && (
        <DetailModal
          text={`최근 작성 내용이 있어요\n이어서 작성하시겠어요?`}
          description="새로 작성하면 기존 기록은 모두 삭제돼요."
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickBackground={() => setShowTempDataModal(false)}
          onClickLeft={handleNewMemo}
          onClickRight={() => {
            restoreTempMemo();
            setShowTempDataModal(false);
          }}
        />
      )}
      {isBottomSheetOpen && (
        <FolderBottomSheet
          onClick={() => setIsBottomSheetOpen(false)}
          // onClickButton={handleBottomSheetComplete}
        />
      )}
    </S.Container>
  );
};
