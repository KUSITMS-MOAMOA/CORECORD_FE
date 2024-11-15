import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 13.4375rem;
  right: 0;
  width: 100%;
  height: calc(100vh - 13.4375rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1.25rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h5`
  line-height: 140%;
`;

export const Plus = styled.p`
  font-size: 0.75rem;
  line-height: 145%;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  overflow-y: auto;
  flex-grow: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
