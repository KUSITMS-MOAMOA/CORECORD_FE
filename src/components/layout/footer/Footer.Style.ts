import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  display: flex;
  width: 100%;
  height: 5.625rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.8125rem 1.875rem 2.3125rem;
  border-radius: 1.5rem 1.5rem 0rem 0rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  box-shadow: 0px -4px 30px 0px rgba(0, 0, 0, 0.07);
  z-index: 10;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Text = styled.span<{ $isActive: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300)};
`;
