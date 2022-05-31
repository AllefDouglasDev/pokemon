import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: ${theme.font.family};
    }

    html {
      font-size: 62.5%;
    }
  `}
`;
