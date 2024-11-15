import styled from 'styled-components';

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Title = styled.h6`
  line-height: 140%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.3125rem;
`;

export const Div = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue50};
`;

export const Description = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0rem 1.25rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  font-size: 1rem;
  line-height: 145%;
`;
