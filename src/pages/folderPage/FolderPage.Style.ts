import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 3.375rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 3.375rem);
  padding: 1.5rem 1.75rem;
  gap: 0.625rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 3rem;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray800};
  background-color: ${({ theme }) => theme.colors.blue50};
`;
