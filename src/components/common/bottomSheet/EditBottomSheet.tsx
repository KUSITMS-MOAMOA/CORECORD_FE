import { BottomSheet } from './BottomSheet';
import * as S from './EditBottomSheet.Style';
import DeleteIcon from '@icons/ReportDeleteIcon.svg';
import ChangeIcon from '@icons/ChangeFolderIcon.svg';
import CloseIcon from '@icons/CloseIcon.svg';

interface EditBottomSheetProps {
  onClick: () => void;
  onClickDelete: () => void;
  onClickChange: () => void;
}

const EDIT_ITEM = [
  {
    icon: DeleteIcon,
    label: '삭제하기',
    actionKey: 'onClickDelete',
    isDelete: true,
  },
  { icon: ChangeIcon, label: '경험 폴더 변경하기', actionKey: 'onClickChange' },
];

export const EditBottomSheet = ({
  onClick,
  onClickDelete,
  onClickChange,
}: EditBottomSheetProps) => {
  const actions: Record<'onClickDelete' | 'onClickChange', () => void> = {
    onClickDelete,
    onClickChange,
  };

  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.CloseIcon src={CloseIcon} alt="closeIcon" onClick={onClick} />
      </S.Header>
      <S.SheetContent>
        {EDIT_ITEM.map(({ icon, label, actionKey, isDelete }) => (
          <S.SheetItem
            key={label}
            $isDelete={isDelete}
            onClick={actions[actionKey as keyof typeof actions]}
          >
            <S.Icon src={icon} />
            {label}
          </S.SheetItem>
        ))}
      </S.SheetContent>
    </BottomSheet>
  );
};
