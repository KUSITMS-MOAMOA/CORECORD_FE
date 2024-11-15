import styled from 'styled-components';

export const TextFiled = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: ${({ theme }) => theme.colors.yellow100};
  outline: none;
  color: ${({ theme }) => theme.colors.gray900};

  &::placeholder {
    font-size: 0.875rem;
    line-height: 145%;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
