import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryChip } from '@/components/common/chip/CategoryChip';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';
import * as S from './RecordCompletePage.Style';
import { getFormattedDate } from '@/utils/dateUtils';
import FolderIcon from '@icons/FolderIcon.svg';

const categoryData = [
  '큐시즘 서비스 기획',
  '밋업 프로젝트',
  '뤼튼',
  '멍냥부리',
  '새 폴더 추가하기',
  '카테고리 수정하기',
  '카테고리 삭제하기',
  '카테고리 복사하기',
  '카테고리 이름 변경하기',
  '사과',
  '바나나',
  '딸기',
  '포도',
  '라임',
  '레몬',
  '자몽',
  '라임',
  '레몬',
  '자몽',
  '라임',
  '레몬',
  '자몽',
];

export const RecordCompletePage = () => {
  const [recordSummary] = useState(
    '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
  );
  const [title, setTitle] = useState(getFormattedDate());
  const [content, setContent] = useState(recordSummary);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleChangeCategory = (category: string) => {
    if (category === '새 폴더 추가하기') {
      setIsBottomSheetOpen(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSaveButton = () => {
    // 저장 로직 구현
    navigate('/home');
  };

  const isSaveDisabled = !title || !content || !selectedCategory;

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>경험 기록이 완료되었어요!</S.Title>
        <S.SubTitle>
          {nickname}님의 경험을 모아서
          <br />
          한눈에 보기 쉽게 요약해드렸어요
        </S.SubTitle>
      </S.HeaderContainer>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder={getFormattedDate()}
          value={title}
          onChange={handleChangeTitle}
          isError={false}
        />
        <S.Line />
        <S.TextArea value={content} onChange={handleChangeContent} />
        <S.Line />

        <S.Label>경험의 카테고리를 선택해주세요.</S.Label>
        <S.CategoryContainer>
          {categoryData.map((category) => (
            <CategoryChip
              key={category}
              children={category}
              isSelected={selectedCategory === category}
              onClick={() => handleChangeCategory(category)}
            />
          ))}
          <CategoryChip onClick={() => handleChangeCategory('새 폴더 추가하기')} isSelected={false}>
            <img src={FolderIcon} alt="changeFolder" />
          </CategoryChip>
        </S.CategoryContainer>

        <S.ButtonWrapper>
          <Button
            type="submit"
            onClick={handleSaveButton}
            styleType="basic"
            disabled={isSaveDisabled}
          >
            저장하기
          </Button>
        </S.ButtonWrapper>
      </S.Form>

      {isBottomSheetOpen && <FolderBottomSheet onClick={() => setIsBottomSheetOpen(false)} />}
    </S.Container>
  );
};
