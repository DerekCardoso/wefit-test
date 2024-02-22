import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 960px;
  margin: 24px auto;

  font-weight: 700;
  background-color: #fff;
  border-radius: 4px;

  table {
    width: 100%;
    border-spacing: 24px 21px;
    text-align: left;

    color: #2f2e41;

    button {
      width: 18px;
      height: 18px;
      background-color: transparent;
      border: none;
    }

    th {
      font-size: 14px;
      color: #999999;

      &:last-child {
        min-width: 100px;
      }
    }
  }

  hr {
    max-width: 910px;
    margin: 0 auto;

    color: #999999;
  }

  @media (max-width: 600px) {
    width: 343px;

    table {
      height: 564px;
    }

    th,
    td {
      display: block;
      padding: 12px;
    }

    thead {
      display: none;
    }
    th:last-child,
    td:last-child {
      min-width: auto;
    }
  }
`;

export const FooterCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin: 21px 24px;
  padding-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }

  div > span:first-child {
    margin-right: 24px;
    font-size: 14px;
    color: #999999;
  }

  div > span:last-child {
    font-size: 24px;
    color: #2f2e41;
  }

  @media (max-width: 600px) {
    div > span:first-child {
      margin-right: 24px;
      font-size: 12px;
      color: #999999;
    }

    div > span:last-child {
      font-size: 24px;
      color: #2f2e41;
    }

    .finalPrice {
      margin-left: auto;
    }

    button {
      width: 311px;
    }
  }
`;
