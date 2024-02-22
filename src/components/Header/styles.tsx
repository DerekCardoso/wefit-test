import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 24px auto;

  color: #fff;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;

    &.flex-column {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
    }

    p {
      font-size: 14px;
    }

    span {
      align-self: flex-end;
      font-size: 12px;
      color: #999999;
    }
  }
`;
