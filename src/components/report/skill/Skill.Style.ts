import styled from 'styled-components';

export const Skill = styled.div<{ $color?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 0.75rem;
  background-color: ${({ $color, theme }) =>
    $color ? theme.colors.yellow50 : theme.colors.blue50};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Keyword = styled.h6`
  line-height: 145%;
`;

export const Line = styled.div<{ $color?: boolean }>`
  width: 90%;
  height: 1px;
  background-color: ${({ $color, theme }) =>
    $color ? theme.colors.yellow300 : theme.colors.blue100};
`;

export const Description = styled.h6`
  font-weight: 400;
  line-height: 145%;
`;
