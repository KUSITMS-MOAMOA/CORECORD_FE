import { Portal } from '../portal/Portal';
import * as S from './SideBar.style';
import HomeIcon from '@icons/HomeIcon.svg?react';
import ListIcon from '@icons/HamburgerIcon.svg?react';
import KeywordIcon from '@icons/KeywordIcon.svg?react';
import MyIcon from '@icons/MyIcon.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';

const SIDEBAR_ITEMS = [
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
    name: '역량 모아보기',
    path: '/keyword',
    icon: KeywordIcon,
  },
  {
    name: '마이페이지',
    path: '/my',
    icon: MyIcon,
  },
];

interface SideBarProps {
  onClick: () => void;
}

export const SideBar = ({ onClick }: SideBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToUrl = (url: string) => {
    navigate(url);
  };

  return (
    <Portal>
      <S.Background onClick={onClick}>
        <S.SideBar onClick={(e) => e.stopPropagation()}>
          <S.Title>CO:RECORD</S.Title>
          <S.ItemContainer>
            {SIDEBAR_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <S.Item key={item.name} onClick={() => goToUrl(item.path)}>
                  <S.Icon
                    as={IconComponent}
                    style={{
                      fill: isActive ? '#333538' : '#989AA0',
                      stroke: isActive ? '#333538' : '#989AA0',
                    }}
                  />
                  <S.Text $isActive={isActive}>{item.name}</S.Text>
                </S.Item>
              );
            })}
          </S.ItemContainer>
        </S.SideBar>
      </S.Background>
    </Portal>
  );
};
