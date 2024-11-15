import { Header } from '@/components/layout/header/Header';
import * as S from './KeywordHeader.style';

interface KeywordHeaderProps {
  currentTabBar: string;
  onClickSideBar: () => void;
  onClickTabBar: (item: string) => void;
}

export const KeywordHeader = ({
  currentTabBar,
  onClickSideBar,
  onClickTabBar,
}: KeywordHeaderProps) => {
  const nickname = localStorage.getItem('nickname');

  return (
    <S.Header>
      <Header onClick={onClickSideBar} />
      <S.Content>
        {nickname}님의 경험을 <br /> 키워드로 모아봤어요
        <S.Div />
      </S.Content>
      <S.TabBar>
        <S.Item
          $isSelected={currentTabBar === '역량 키워드'}
          onClick={() => onClickTabBar('역량 키워드')}
        >
          역량 키워드
        </S.Item>
        <S.Item
          $isSelected={currentTabBar === '내 역량 분석'}
          onClick={() => onClickTabBar('내 역량 분석')}
        >
          내 역량 분석
        </S.Item>
      </S.TabBar>
    </S.Header>
  );
};
