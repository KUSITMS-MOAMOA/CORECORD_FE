import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const Text = styled.h5`
  width: 12rem;
  word-break: keep-all;
  text-align: center;
  line-height: 140%;
`;

export const Description = styled.p`
  font-size: 0.8125rem;
  font-weight: 400;
  height: 145%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;
