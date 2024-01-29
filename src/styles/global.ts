import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body {
    background: transparent;    
    overflow-x: hidden;   
    margin: 0;
    padding: 0; 
    
    // for background opacity
    /* &::before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
        no-repeat center center;
      background-size: cover;
      opacity: 0.1;
      content: "";
      z-index: -1;
    } */

    /**
    Small: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_small-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
    Madium: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_medium-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
    Large: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
    */
  }
  html {
    font-size: 16px;
  }
`;
