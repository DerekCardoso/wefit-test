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
`;
