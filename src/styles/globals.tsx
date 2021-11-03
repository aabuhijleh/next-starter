import { createGlobalStyle } from "styled-components";
import { variables } from "@/styles/variables";

export const GlobalStyle = createGlobalStyle`
  ${variables}

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: var(--font-default);
    font-weight: 400;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
