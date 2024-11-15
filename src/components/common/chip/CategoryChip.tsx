import * as S from './CategoryChip.Style';

interface CategoryChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isSelected: boolean;
}

/**
 *
 * @param children - CategoryChip 안에 들어갈 글씨
 * @param isSelected - 선택된 chip의 색깔을 표시하는 값
 * @returns
 */
export const CategoryChip = ({ children, isSelected, ...props }: CategoryChipProps) => {
  return (
    <S.CategoryChip $isSelected={isSelected} {...props}>
      {children}
    </S.CategoryChip>
  );
};
