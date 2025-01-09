/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('/fonts/GowunBatang-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'GowunDodum-Regular', sans-serif;
    background-color: #ffffff;
  }
`;
