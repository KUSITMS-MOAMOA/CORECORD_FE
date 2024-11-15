import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0rem 1.25rem;
  height: 3.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 3.75rem);
  background-color: #f5f5f5;
`;
