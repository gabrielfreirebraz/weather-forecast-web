import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;

  // for background opacity
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    /* background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_small-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg") */
    background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
      no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    content: "";
    z-index: -1;
  }

  /* @media screen and (min-width: 480px) {
    background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_medium-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
      no-repeat center center;
  }

  @media screen and (min-width: 768px) {
    background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
      no-repeat center center;
  } */

  #main {
    background-color: ${(props) => props.theme.white};
    border: solid 1px #000;
    height: 25rem;
    width: 50rem;
  }
`;
