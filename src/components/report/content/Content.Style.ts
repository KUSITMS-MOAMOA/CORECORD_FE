import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 3.375rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.gray900};
  gap: 2.75rem;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const Title = styled.h4`
  line-height: 135%;
`;

export const Description = styled.h6`
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: 400;
  line-height: 145%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
`;

export const MiddleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatText = styled.h6`
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 400;
  line-height: 145%;
`;
