import { Modal } from './Modal';
import * as S from './DetailModal.Style';
import { Button } from '../button/Button';

interface DetailModal {
  text: string;
  description?: string;
  leftButtonText: string;
  rightButtonText: string;
  onClickBackground?: () => void;
  onClickLeft: () => void;
  onClickRight: () => void;
}

/**
 *
 * @param text - 모달 안의 메시지
 * @param description - 모달 안의 세부 텍스트
 * @param leftButtonText - 왼쪽 버튼 글씨
 * @param rightButtonText - 오른쪽 버튼 글씨
 * @param onClickBackground - 뒷배경 클릭 시 작동할 함수
 * @param onClickLeft - 왼쪽 버튼 클릭 시 작동할 함수
 * @param onClickRight -오른쪽 버튼 클릭 시 작동할 함수
 * @returns
 */
export const DetailModal = ({
  text,
  description,
  leftButtonText,
  rightButtonText,
  onClickBackground,
  onClickLeft,
  onClickRight,
}: DetailModal) => {
  return (
    <Modal onClick={onClickBackground || (() => {})}>
      <S.Content>
        <S.Text>{text}</S.Text>
        <S.Description>{description}</S.Description>
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
