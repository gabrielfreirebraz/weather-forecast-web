import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  /* position: relative; */

  #header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    .header__logo {
      max-width: 4rem;
    }
    h1 {
      color: ${(props) => props.theme.black};
      margin: 2rem 0 0; /* --> MARGIN BETWEEN HEADER AND CONTENT (BOTTOM ONLY) */
      font-size: 2rem;
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
    -webkit-box-shadow: -3px 5px 75px 5px #e3e0e3;
    box-shadow: -3px 5px 75px 5px #e3e0e3;
    border-radius: 10px;
    margin-top: 0;
    height: fit-content;
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

    .content__formAddress {
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
    .content__resultForecast {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 4.5rem 0;
    }
  }

  #footer {
    /* background: rgba(255, 255, 255, 0.5); */
    /* position: absolute;
    bottom: 0; */
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
      text-align: center;
    }
  }
`;
