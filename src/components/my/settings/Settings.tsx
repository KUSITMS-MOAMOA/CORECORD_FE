import { SettingItem } from './SettingItem';
import * as S from './Settings.Style';

const POLICY_DATA = [
  { title: '개인정보처리방침', url: 'www.naver.com' }, // 노션 링크로 수정 필요
  { title: '이용약관', url: 'www.naver.com' }, // 노션 링크로 수정 필요
];
interface SettingsProps {
  onClickLogout: () => void;
  onClickDeleteId: () => void;
}

export const Settings = ({ onClickLogout, onClickDeleteId }: SettingsProps) => {
  const goToLink = (url: string) => {
    return () => {
      window.location.href = url;
    };
  };

  return (
    <S.Container>
      <S.Content>
        {POLICY_DATA.map((item, index) => (
          <SettingItem key={index} onClick={() => goToLink(item.url)}>
            {item.title}
          </SettingItem>
        ))}
      </S.Content>
      <S.Content>
        <SettingItem onClick={onClickLogout}>로그아웃</SettingItem>
        <SettingItem onClick={onClickDeleteId}>회원탈퇴</SettingItem>
      </S.Content>
    </S.Container>
  );
};
