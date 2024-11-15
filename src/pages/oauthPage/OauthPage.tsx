import { LoginButton } from '@components/common/login/LoginButton';
import * as S from './OauthPage.Style';

export const OauthPage = () => {
  const handleOauth = () => {
    window.location.href = 'https://api.corecord.site/oauth2/authorization/kakao';
  };

  return (
    <S.Container>
      <S.Logo>co:record</S.Logo>
      <S.Subtitle>
        차곡차곡 쌓여가는
        <br />
        나의 하나뿐인 커리어 기록
        <br />
      </S.Subtitle>
      <S.ButtonWrapper>
        <LoginButton onClick={handleOauth} />
      </S.ButtonWrapper>
    </S.Container>
  );
};
