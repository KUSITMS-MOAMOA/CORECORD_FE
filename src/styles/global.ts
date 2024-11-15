import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url(/font/Pretendard-Regular.woff) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url(/font/Pretendard-SemiBold.woff) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url(/font/Pretendard-Bold.woff) format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    font-style: normal;
    src: url(/font/MontserratAlternates-Bold.ttf) format('ttf');
  }

  h1 {
    font-size: ${theme.fontSize.h1};
    font-weight: 700;
  }

  h2 {
    font-size: ${theme.fontSize.h2};
    font-weight: 600;
  }

  h3 {
    font-size: ${theme.fontSize.h3};
    font-weight: 600;
  }

  h4 {
    font-size: ${theme.fontSize.h4};
    font-weight: 700;
  }

  h5 {
    font-size: ${theme.fontSize.h5};
    font-weight: 600;
  }

  h6 {
    font-size: ${theme.fontSize.h6};
    font-weight: 600;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: ${theme.fonts.regular};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
