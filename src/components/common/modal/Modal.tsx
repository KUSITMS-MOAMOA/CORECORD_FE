import { Portal } from '../portal/Portal';
import * as S from './Modal.Style';
import CloseIcon from '@icons/CloseIcon.svg';

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
  isIcon?: boolean;
}

export const Modal = ({ children, onClick, isIcon }: ModalProps) => {
  return (
    <Portal>
      <S.Background onClick={onClick}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          {isIcon && <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />}
          {children}
        </S.Modal>
      </S.Background>
    </Portal>
  );
};
