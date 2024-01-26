import styled from "styled-components";

export const CardForecastContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  .card__forecastTitle {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      transition: all 0.1s;
      font-size: 1rem !important;
      font-weight: 450 !important;
    }
  }

  &:hover {
    .card__forecastTitle h1 {
      color: ${(props) => props.theme.primary};
      font-size: 1.5rem !important;
      margin-top: -0.85rem;
    }
    .card__forecastItems {
      border: solid 1px ${(props) => props.theme.primary};
    }
  }

  .card__forecastItems {
    transition: all 0.5s;
    display: flex;
    gap: 0.2rem;
    border: dotted 1px ${(props) => props.theme.gray};
    border-radius: 7px;
    padding: 0.5rem;

    -webkit-box-shadow: -4px 5px 40px 1px rgba(242, 239, 242, 0.75);
    -moz-box-shadow: -4px 5px 40px 1px rgba(242, 239, 242, 0.75);
    box-shadow: -4px 5px 40px 1px rgba(242, 239, 242, 0.75);

    .card {
      width: 4.2rem;
      height: fit-content;
      border: none;
      background-color: rgba(255, 255, 255, 0.7);
      /* border: solid 1px ${(props) => props.theme.lightGray}; */
    }
    .card-title {
      span {
        font-size: 1.5rem;
      }
    }
    .card-body {
      padding: 1rem 0.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      label {
        font-size: 0.7rem;
        margin: 0.5rem 0 1rem;
      }
    }
  }
`;
