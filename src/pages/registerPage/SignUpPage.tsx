import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './SignUpPage.Style';
import { Input } from '@components/common/input/Input';
import { SelectBox } from '@components/common/selectbox/SelectBox';
import { Button } from '@components/common/button/Button';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { registerUser } from '../../api/Oauth';
import { useNicknameValidation } from '../../hooks/useNicknameValidation';

const statusOptions = ['대학생', '대학원생', '취업준비생', '인턴', '재직중'];

export const SignUpPage = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const { nickname, isError, errorMessage, onChangeNickname } = useNicknameValidation();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      console.error('등록 토큰이 없습니다.');
      return;
    }
    try {
      const apiResponse = await registerUser(token, nickname, status);
      if (apiResponse.is_success) {
        if (apiResponse.data.nickname) {
          localStorage.setItem('nickname', apiResponse.data.nickname); // 로컬 스토리지에 엑세스 토큰 저장
          navigate('/login-success');
        }
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
      <TabBar leftText="회원가입" />
      <S.Container>
        <S.Title>추가 정보 작성</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <S.Label>닉네임</S.Label>
            <Input
              placeholder="10자 이내로 입력해주세요."
              value={nickname}
              onChange={onChangeNickname}
              required
              maxLength={10}
              isError={isError}
              errorMessage={errorMessage}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>현소속</S.Label>
            <SelectBox select={status} onChange={setStatus} statusData={statusOptions} />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Button styleType="basic" disabled={isError || !nickname || !status}>
              완료
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Container>
    </>
  );
};
