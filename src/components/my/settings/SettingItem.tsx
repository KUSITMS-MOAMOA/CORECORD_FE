import * as S from './SettingItem.Style';
import RightArrowIcon from '@icons/RightArrowIcon.svg';

interface SettingItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const SettingItem = ({ children, onClick }: SettingItemProps) => {
  return (
    <S.Item>
      <S.TextContainer>
        <S.Text>{children}</S.Text>
      </S.TextContainer>
      <S.Icon src={RightArrowIcon} alt="rightArrow" onClick={onClick} />
    </S.Item>
  );
};
