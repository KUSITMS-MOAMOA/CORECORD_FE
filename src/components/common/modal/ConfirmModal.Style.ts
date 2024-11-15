import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.0625rem;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const Text = styled.span`
  font-size: 0.875rem;
  line-height: 140%;
  text-align: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const IconContainer = styled.div<{ $isCheck: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.125rem;
  background-color: ${(props) =>
    props.$isCheck ? props.theme.colors.blue500 : props.theme.colors.gray50};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 0.6875rem;
  height: 0.6875rem;
`;

export const Message = styled.p`
  font-size: 0.75rem;
  line-height: 145%;
`;
