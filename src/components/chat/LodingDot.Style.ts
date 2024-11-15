import styled, { keyframes } from 'styled-components';

export const blink = keyframes`
  0%, 20% {
    opacity: 0;
  }
  25%, 100% {
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div`
  display: inline-block;
  font-size: 0.875rem;
`;

export const Dot = styled.span<{ delay: string }>`
  animation: ${blink} 1.4s infinite steps(1) ${({ delay }) => delay};
`;