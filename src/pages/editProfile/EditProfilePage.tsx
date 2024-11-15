import { useEffect, useState } from 'react';
import { Button } from '@components/common/button/Button';
import { TabBar } from '@components/layout/tabBar/TabBar';
import * as S from './EditProfilePage.Style';
import { EditProfile } from '@components/editProfile/EditProfile';
import { useNicknameValidation } from '../../hooks/useNicknameValidation';
import { patchUserInfo } from '@/api/My';
import { useNavigate } from 'react-router-dom';

//@TODO
// 1. 닉네임 에러처리
// 2. 백엔드 요청

export const EditProfilePage = () => {
  const [submit, setSubmit] = useState(true);
  const [select, setSelect] = useState('');
  const navigate = useNavigate();
  const { nickname, isError, errorMessage, onChangeNickname } = useNicknameValidation();

  useEffect(() => {
    if ((!isError && nickname !== '') || select !== '') {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [isError, nickname, select]);

  const handleSelectChange = (select: string) => {
    setSelect(select);
  };

  const handleSubmit = async () => {
    const response = await patchUserInfo({ nickname, status: select });
    if (response.is_success) {
      navigate('/my', { state: { alertMessage: '변경 내용이 저장되었어요!' } });
    }
  };

  const SELECT_DATA = ['대학생', '대학원생', '취업 준비생', '인턴', '재직 중'];

  return (
    <div>
      <TabBar centerText="프로필 수정" />
      <S.Content>
        <EditProfile
          nickname={nickname}
          onChangeNickname={onChangeNickname}
          select={select}
          onChangeSelect={handleSelectChange}
          selectData={SELECT_DATA}
          isError={isError}
          errorMessage={errorMessage}
        />
        <S.ButtonStyle>
          <Button styleType="basic" disabled={submit} onClick={handleSubmit}>
            저장하기
          </Button>
        </S.ButtonStyle>
      </S.Content>
    </div>
  );
};
