import * as S from '../button/Button.Style';
import KakaoIcon from '@icons/KakaoIcon.svg';
import styled from 'styled-components';

const LoginButtonContainer = styled(S.Container)`
  background-color: rgba(255, 229, 0, 1);
  color: #3c1e1e;
`;

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <LoginButtonContainer $styleType="basic" onClick={onClick}>
      <img
        src={KakaoIcon}
        alt="Kakao Icon"
        style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }}
      />
      카카오로 로그인하기
    </LoginButtonContainer>
  );
};
