import styled from 'styled-components';

export const KeywordList = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 0.5rem;
`;

export const Title = styled.h6`
  line-height: 145%;
`;

export const Description = styled.p`
  font-size: 0.8125rem;
  line-height: 145%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  font-size: 0.6875rem;
  line-height: 145%;
`;
