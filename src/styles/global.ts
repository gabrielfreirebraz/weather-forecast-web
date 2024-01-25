import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body {
    background: transparent;    
    overflow: hidden;    
    height: 100%;
  }
  html {
    font-size: 16px;
  }
`;
