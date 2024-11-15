import { useEffect } from 'react';
import * as S from './ToastMessage.Style';

const ToastMessage = ({
  text,
  duration = 3000,
  onClose,
}: {
  text: string;
  duration?: number;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <S.ToastContainer>
      <S.Text>{text}</S.Text>
    </S.ToastContainer>
  );
};

export default ToastMessage;
