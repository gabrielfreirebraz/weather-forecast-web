import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  #header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    .header__logo {
      max-width: 4.5rem;
    }
    h1 {
      color: ${(props) => props.theme.white};
      margin: 2rem 0;
      font-size: 3rem;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 1rem 5rem;
      letter-spacing: 0.4rem;
    }
  }

  // for background opacity
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
      no-repeat center center;
    background-size: cover;

    opacity: 0.5;
    content: "";
    z-index: -1;
  }

  /**
  Small: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_small-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  Madium: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_medium-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  Large: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  */

  #main {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    margin-top: 5rem;
    height: 30rem;
    width: 100%;
  }
`;
