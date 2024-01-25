import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body {
    background: transparent;    
    /* opacity: 0.5; */
    
    height: 100%;
  }
  html {
    font-size: 16px;
  }
`;
