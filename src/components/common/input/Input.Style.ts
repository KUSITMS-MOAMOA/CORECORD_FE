import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
`;

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 0.75rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({ $isError, theme }) => ($isError ? '#f00' : theme.colors.gray50)};
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  line-height: 145%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ $isError, theme }) => ($isError ? '#f00' : theme.colors.gray50)};
  }
`;

export const ErrorMessage = styled.p`
  color: #f00;
  font-size: 0.75rem;
  line-height: 130%;
`;
