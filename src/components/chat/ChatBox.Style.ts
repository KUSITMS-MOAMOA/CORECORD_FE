import styled from 'styled-components';

export const ChatBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ChatBoxForm = styled.form`
  flex-direction: row;
  width: 100%;
  height: 2.25rem;
  margin: 0.625rem;
  overflow: hidden;
  display: flex;
  gap: 0.625rem;
`;

export const ChatBoxInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray25};
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 400;
  border: none;
  padding: 0.625rem;
  outline: none;
`;

export const ChatBoxButton = styled.button<{ $hasMessage: boolean }>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  border: none;
  padding: 0.5rem 0.483rem;
  background-color: ${({ theme, $hasMessage }) =>
    $hasMessage ? theme.colors.gray700 : theme.colors.gray100};
  transition: background-color 0.2s ease;
`;