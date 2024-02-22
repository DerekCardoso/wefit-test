import styled from "styled-components";

export const CartItemContent = styled.tr`
  td {
    div {
      display: flex;
      align-items: center;

      &:nth-child(2) {
        display: block;
        margin-left: 52px;
      }
    }
    .movie-cover {
      height: 114px;
      width: 89px;
    }

    h4 {
      font-size: 14px;
    }
    input {
      width: 62px;
      height: 26px;
      margin: 0 11px;
      padding: 12px;
      border: 1px solid #999999;
      border-radius: 4px;
    }

    &:last-child {
      padding-right: 10px;
      text-align: right;
    }

    button {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    td {
      div {
        .movie-cover {
          width: 64px;
          height: 82px;
        }

        .title {
          display: flex;
          justify-content: space-between;
          top: -28px;
          left: -40px;
          position: relative;

          h4 {
            width: 100px;
          }
        }
      }
    }
    .price {
      position: relative;
      top: -102px;
      right: -230px;
      font-size: 16px;
    }
    .count {
      position: relative;
      right: -78px;
      top: -56px;
    }
    .trashButton {
      position: relative;
      top: -195px;
      right: 0px;
    }
  }
`;
