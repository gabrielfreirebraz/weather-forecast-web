import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body {
    background: transparent;    
  }
  html {
    font-size: 16px;
  }
`;
