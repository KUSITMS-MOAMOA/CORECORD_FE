import { useEffect } from 'react';
import { Portal } from '../portal/Portal';
import * as S from './BottomSheet.Style';

interface BottomSheetProps {
  children: React.ReactNode;
  onClick: () => void;
}

/**
 *
 * @param children - bottomSheet 안의 내용물
 * @param onClick - close 버튼 클릭했을 때 수행할 함수
 * @returns
 */
export const BottomSheet = ({ children, onClick }: BottomSheetProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Portal>
      <S.Background onClick={onClick}>
        <S.BottomSheet onClick={(e) => e.stopPropagation()}>{children}</S.BottomSheet>
      </S.Background>
    </Portal>
  );
};
