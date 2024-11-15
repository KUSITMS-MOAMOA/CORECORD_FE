import * as S from './FloatingButton.Style';
import WriteIcon from '@icons/WriteIcon.svg';

interface FloatingButtonProps {
  onClick: () => void;
}

/**
 *
 * @param onClick - FloatingButton 클릭 시 수행할 함수
 * @returns
 */
export const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <S.Icon src={WriteIcon} alt="기록" />
    </S.Button>
  );
};
