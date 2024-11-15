import * as S from './Header.style';
import MenuIcon from '@icons/MenuIcon.svg';

interface HeaderProps {
  onClick: () => void;
  title?: string;
}

/**
 *
 * @param onClick - 햄버거 버튼 클릭 시 수행해야 하는 함수
 * @param title - 헤더에 들어갈 가운데 글씨
 * @returns
 */
export const Header = ({ onClick, title }: HeaderProps) => {
  return (
    <S.Header>
      <S.Icon src={MenuIcon} alt="사이드바 햄버거 버튼" onClick={onClick} />
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};
