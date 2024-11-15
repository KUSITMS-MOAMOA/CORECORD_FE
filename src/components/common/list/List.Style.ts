import styled from 'styled-components';

export const List = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Title = styled.h4`
  line-height: 140%;
`;

export const DateText = styled.p`
  font-size: 0.8125rem;
  line-height: 145%;
`;
