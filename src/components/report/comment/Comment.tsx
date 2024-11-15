import * as S from './Comment.Style';

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <S.Comment>
      <S.Title>이렇게 해보는 건 어때요?</S.Title>
      <S.Container>
        <S.Div />
        <S.Description>{comment}</S.Description>
      </S.Container>
    </S.Comment>
  );
};
