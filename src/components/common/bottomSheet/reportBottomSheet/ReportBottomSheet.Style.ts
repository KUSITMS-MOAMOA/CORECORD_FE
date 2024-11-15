import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.h6`
  color: ${({ theme }) => theme.colors.gray900};
  line-height: 140%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.3125rem;
  max-height: calc(100vh - 15rem);
  gap: 1.25rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Record = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
