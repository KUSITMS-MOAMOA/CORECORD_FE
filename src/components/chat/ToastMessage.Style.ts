import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(1.25rem); }
  to { opacity: 1; transform: translateY(0); }
`;

export const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(1.25rem); }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.colors.gray700};
  padding: 0.625rem 1.25rem;
  border-radius: 1.25rem;
  font-size: 1rem;
  animation: ${fadeIn} 0.5s ease-in, ${fadeOut} 0.5s ease-out;
  animation-delay: 0s, 2.5s;
  z-index: 1000;
`;

export const Text = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 400;
`;
