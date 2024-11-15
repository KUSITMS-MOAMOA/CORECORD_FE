import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 11.125rem;
  padding: 0rem 0rem 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

export const Title = styled.h4`
  line-height: 135%;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const FolderIcon = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
