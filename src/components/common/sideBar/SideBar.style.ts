import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 80%;
  height: 100%;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.span`
  font-family: 'Montserrat';
  font-size: 1.3125rem;
  font-weight: 700;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.span<{ $isActive: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => (props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300)};
`;
