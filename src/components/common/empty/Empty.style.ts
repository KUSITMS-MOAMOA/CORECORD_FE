import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.5625rem;
  gap: 1.25rem;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: center;
  line-height: 145%;
`;

// 여기 바뀌어야함 아직 디자인 중인 것으로 알고 있음
export const Empty = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${({ theme }) => theme.colors.blue100};
  border-radius: 62.4375rem;
  margin-bottom: 0.5rem;
`;

export const EmptyMessage = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const Description = styled.h6`
  font-weight: 400;
`;
