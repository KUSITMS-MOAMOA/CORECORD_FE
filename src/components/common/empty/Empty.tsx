import * as S from './Empty.style';

export const Empty = () => {
  return (
    <S.EmptyContainer>
      <S.Empty />
      <S.EmptyMessage>아직 작성한 경험이 없어요!</S.EmptyMessage>
      <S.Description>
        모아모아와 함께 <br /> 내 경험과 역량을 모아보세요!
      </S.Description>
    </S.EmptyContainer>
  );
};
