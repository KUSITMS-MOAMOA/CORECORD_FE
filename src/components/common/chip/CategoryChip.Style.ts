import styled from 'styled-components';

export const CategoryChip = styled.button<{ $isSelected: boolean }>`
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  border-radius: 6.1875rem;
  border: ${(props) =>
    props.$isSelected
      ? `1px solid ${props.theme.colors.gray700}`
      : `1px solid ${props.theme.colors.gray50}`};
  background-color: ${(props) => (props.$isSelected ? props.theme.colors.gray700 : '#ffffff')};
  color: ${(props) => (props.$isSelected ? props.theme.colors.white : props.theme.colors.gray500)};
  font-size: 0.9375rem;
  line-height: 145%;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray700};
    border: ${({ theme }) => `1px solid ${theme.colors.gray700}`};
  }
`;
