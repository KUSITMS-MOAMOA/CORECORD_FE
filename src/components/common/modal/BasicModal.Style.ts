import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
`;

export const Text = styled.h5`
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;
