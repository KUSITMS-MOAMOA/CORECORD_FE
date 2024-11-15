import { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { BottomSheet } from './BottomSheet';
import * as S from './FolderBottomSheet.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import { postNewFolder } from '@/api/Folder';

interface FolderBottomSheetProps {
  onClick: () => void;
}

/**
 *
 * @param onClick - BottomSheet 열고 닫는 함수
 * @returns
 */
export const FolderBottomSheet = ({ onClick }: FolderBottomSheetProps) => {
  const [folderName, setFolderName] = useState('');
  const [isError, setIsError] = useState(false);

  const changeFolderName = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
    if (e.target.value.length > 15) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleClickButton = async () => {
    const response = await postNewFolder(folderName);
    if (response.is_success) {
      onClick();
    }
  };
  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.Title>새 폴더 추가하기</S.Title>
        <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />
      </S.Header>
      <S.SheetContent>
        추가할 폴더의 이름을 적어주세요.
        <Input
          isError={isError}
          errorMessage="15자 이내의 폴더 이름을 입력해주세요"
          placeholder="최대 15자까지 입력할 수 있어요"
          value={folderName}
          onChange={changeFolderName}
        />
        <Button
          styleType="basic"
          disabled={folderName === '' || isError}
          onClick={handleClickButton}
        >
          완료
        </Button>
      </S.SheetContent>
    </BottomSheet>
  );
};
