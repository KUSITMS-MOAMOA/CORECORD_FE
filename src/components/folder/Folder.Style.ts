import styled, { css } from 'styled-components';

export const Folder = styled.section<{ $type: 'folder' | 'plus' }>`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  color: ${({ theme }) => theme.colors.gray800};

  ${({ $type, theme }) =>
    $type === 'folder'
      ? css`
          background-color: ${theme.colors.blue50};
        `
      : css`
          flex-shrink: 0;
          cursor: pointer;
          background-color: ${theme.colors.blue100};
        `}
`;
