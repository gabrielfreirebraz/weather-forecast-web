import styled from "styled-components";

export const HomeContainer = styled.div`
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
    background: url("https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg")
      no-repeat center center;
    background-size: cover;

    opacity: 0.2;
    content: "";
    z-index: -1;
  }

  /**
  Small: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_small-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  Madium: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_medium-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  Large: https://images.teamtailor-cdn.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v6/image_uploads/b9d7b84e-8bc9-43e9-b032-b9c85b87cfd4/original.jpeg
  */

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
      color: ${(props) => props.theme.black};
      margin: 2rem 0;
      font-size: 2rem;
      /* background-color: rgba(0, 0, 0, 0.7); */
      padding: 1rem 5rem;
      letter-spacing: 0.35rem;
      font-weight: 900;
      height: 10rem;
      /* border: solid 1px red; */
      text-align: center;
      span {
        color: #fff;
      }
      &::after {
        background-image: url("/scratch-upstart13.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right !important;
        /* border: solid 1px #000; */
        content: "";
        display: block;
        height: 100%;
        /* margin-left: 1rem; */
        margin-top: -7rem;
        position: relative;
        width: 31.87rem;
        display: block;
        z-index: -1;
      }
    }
  }

  #content {
    background: rgba(255, 255, 255, 0.9);
    -webkit-box-shadow: -3px 5px 135px 5px #cccccc;
    box-shadow: -3px 5px 135px 5px #cccccc;
    border-radius: 15px;
    /* margin-top: 2rem; */
    min-height: 12rem;
    width: 100%;
    padding: 1rem 2rem;
    h1 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      svg#Layer_1 {
        min-height: 4rem;
        min-width: 4rem;
        margin-right: 0.5rem;
      }
    }

    .searchAddress {
      margin-left: 4.5rem;

      input[type="text"] {
        box-shadow: none;
        min-width: 100%;

        &::placeholder {
          font-style: italic;
          font-size: 0.8rem;
        }
        &:hover {
          border: solid 1px ${(props) => props.theme.black};
        }
        &:focus {
          border: solid 1px ${(props) => props.theme.primary};
        }
      }
      .btn {
        background: ${(props) => props.theme.black};
        border: solid 1px ${(props) => props.theme.black};
        width: 100%;
        &:hover {
          background: ${(props) => props.theme.primary};
          border: solid 1px ${(props) => props.theme.primary};
          /* opacity: 0.8; */
        }
      }
    }
  }

  #footer {
    /* background: rgba(255, 255, 255, 0.5); */
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 9rem;

    img {
      max-height: 2.5rem;
    }
    p {
      color: ${(props) => props.theme.black};
      font-weight: 450;
      font-size: 0.9rem;
    }
  }
`;
