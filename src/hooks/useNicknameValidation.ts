import { useState } from 'react';

export const useNicknameValidation = () => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState({ isError: false, message: '' });

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const nicknameReg = /[!@#$%^&*()_\-+={}:'"\\|,.<>?/~`[\]]/g;

    let errorMessage = '';
    if (nicknameReg.test(value)) {
      errorMessage = '특수문자는 입력이 불가능해요';
    } else if (value.length < 2 || value.length > 10) {
      errorMessage = '10자 이내의 닉네임을 입력해주세요';
    }
    setError({
      isError: Boolean(errorMessage),
      message: errorMessage,
    });

    setNickname(value);
  };

  return {
    nickname,
    isError: error.isError,
    errorMessage: error.message,
    onChangeNickname,
  };
};
