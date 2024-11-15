import { Header } from '@/components/layout/header/Header';
import * as S from './Header.Style';

interface HomeHeaderProps {
  onClickSideBar: () => void;
}

/**
 *
 * @param onClickSideBar - 사이드바 핸들링 함수
 * @returns
 */
export const HomeHeader = ({ onClickSideBar }: HomeHeaderProps) => {
  const nickname = localStorage.getItem('nickname');

  return (
    <S.Header>
      <Header onClick={onClickSideBar} />
      <S.Title>
        안녕하세요. {nickname}님 <br /> 오늘의 경험을 모아보세요!
      </S.Title>
    </S.Header>
  );
};
