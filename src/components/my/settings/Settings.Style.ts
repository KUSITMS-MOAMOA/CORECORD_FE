import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.875rem 1.25rem 0rem;
  gap: 1.25rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem;
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
`;
