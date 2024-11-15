import { Button } from '../button/Button';
import { Modal } from './Modal';
import * as S from './BasicModal.Style';

interface BasicModalProps {
  text: string;
  leftButtonText: string;
  rightButtonText: string;
  onClickBackground: () => void;
  onClickLeft: () => void;
  onClickRight: () => void;
}

/**
 *
 * @param text - 모달의 메시지
 * @param leftButtonText - 왼쪽 버튼 글씨
 * @param rightButtonText - 오른쪽 버튼 글씨
 * @param onClickBackground - 뒷배경 클릭 시 작동할 함수
 * @param onClickLeft - 왼쪽 버튼 클릭 시 작동할 함수
 * @param onClickRight -오른쪽 버튼 클릭 시 작동할 함수
 * @returns
 */
export const BasicModal = ({
  text,
  leftButtonText,
  rightButtonText,
  onClickBackground,
  onClickLeft,
  onClickRight,
}: BasicModalProps) => {
  return (
    <Modal onClick={onClickBackground}>
      <S.Content>
        <S.Text>{text}</S.Text>
        <S.ButtonContainer>
          <Button styleType="popupLeft" onClick={onClickLeft}>
            {leftButtonText}
          </Button>
          <Button styleType="popupRight" onClick={onClickRight}>
            {rightButtonText}
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </Modal>
  );
};
