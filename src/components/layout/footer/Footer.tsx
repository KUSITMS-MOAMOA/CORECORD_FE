import * as S from './Footer.Style';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@icons/HomeIcon.svg?react';
import ListIcon from '@icons/HamburgerIcon.svg?react';
import KeywordIcon from '@icons/KeywordIcon.svg?react';
import MyIcon from '@icons/MyIcon.svg?react';

const FOOTER_ITEM = [
  {
    name: '홈',
    path: '/home',
    icon: HomeIcon,
  },
  {
    name: '내 경험',
    path: '/list',
    icon: ListIcon,
  },
  {
    name: '키워드',
    path: '/keyword',
    icon: KeywordIcon,
  },
  {
    name: '마이',
    path: '/my',
    icon: MyIcon,
  },
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToUrl = (url: string) => {
    navigate(url);
  };

  return (
    <S.Footer>
      {FOOTER_ITEM.map((item) => {
        const IconComponent = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <S.ItemContainer key={item.name} onClick={() => goToUrl(item.path)}>
            <S.Icon as={IconComponent} style={{ fill: isActive ? '#333538' : '#989AA0' }} />
            <S.Text $isActive={isActive}>{item.name}</S.Text>
          </S.ItemContainer>
        );
      })}
    </S.Footer>
  );
};
