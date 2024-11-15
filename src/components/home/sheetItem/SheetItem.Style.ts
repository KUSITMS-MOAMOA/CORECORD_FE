import styled from 'styled-components';

export const SheetItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.375rem 1.125rem 1rem 1rem;
  gap: 2.8125rem;
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
`;

// 이 부분 아이콘이나 뭐 추가될 예정
export const DIV = styled.div<{ color: 'blue' | 'yellow' }>`
  width: 4.375rem;
  height: 4.375rem;
  background-color: ${({ theme, color }) =>
    color === 'blue' ? theme.colors.blue100 : theme.colors.yellow100};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 145%;
  width: 6.5625rem;
`;

export const Title = styled.h3`
  line-height: 135%;
`;
