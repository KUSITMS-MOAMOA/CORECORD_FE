import styled from 'styled-components';

export const Chip = styled.div<{ size: string; $color?: boolean }>`
  width: fit-content;
  padding: ${(props) => (props.size === 'large' ? '0.25rem 0.875rem' : '0.125rem 0.375rem')};
  border-radius: 0.25rem;
  background-color: ${(props) => (props.$color ? '#fffde3' : props.theme.colors.blue50)};
  color: ${({ theme }) => theme.colors.gray900};
  font-size: ${(props) => (props.size === 'large' ? '0.875rem' : '0.75rem')};
  font-weight: ${(props) => (props.size === 'large' ? '600' : '400')};
  line-height: 145%;
`;
