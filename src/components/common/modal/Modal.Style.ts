import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

export const Modal = styled.div`
  position: relative;
  width: 17.5rem;
  padding: 2.625rem 0.75rem 0.875rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;
