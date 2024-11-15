import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 13.125rem);
  position: absolute;
  top: 13.125rem;
  left: 0;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  color: ${({ theme }) => theme.colors.gray900};
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`;

export const KeywordListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
