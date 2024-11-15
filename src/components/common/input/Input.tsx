import * as S from './Input.Style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorMessage?: string;
}

/**
 *
 * @param isError - input의 유효성 검사 에러
 * @param errorMessage - isError가 true일 때 나오는 에러 메시지
 * @returns
 */
export const Input = ({ isError, errorMessage, ...props }: InputProps) => {
  return (
    <S.Container>
      <S.Input $isError={isError} {...props} />
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};
