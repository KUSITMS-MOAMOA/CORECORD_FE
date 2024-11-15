import { Input } from '../common/input/Input';
import { SelectBox } from '../common/selectbox/SelectBox';
import * as S from './EditProfile.Style';

interface EditProfileProps {
  nickname: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  select: string;
  onChangeSelect: (select: string) => void;
  selectData: string[];
  isError: boolean;
  errorMessage: string;
}

export const EditProfile = ({
  nickname,
  onChangeNickname,
  select,
  onChangeSelect,
  selectData,
  isError,
  errorMessage,
}: EditProfileProps) => {
  return (
    <S.EditProfile>
      <S.Edit>
        <S.Title>닉네임 변경</S.Title>
        <Input
          placeholder="변경할 닉네임을 입력해주세요"
          value={nickname}
          onChange={onChangeNickname}
          required
          maxLength={10}
          isError={isError}
          errorMessage={errorMessage}
        />
      </S.Edit>
      <S.Edit>
        <S.Title>소속 변경</S.Title>
        <SelectBox
          select={select}
          onChange={onChangeSelect}
          statusData={selectData}
          placeholder="선택하기"
        />
      </S.Edit>
    </S.EditProfile>
  );
};
