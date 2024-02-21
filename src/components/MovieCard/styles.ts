import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 309.33px;
  padding: 10px 11px;

  border-radius: 4px;
  background-color: #fff;
`;

export const MovieCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: 700;
  color: #333333;

  img {
    margin-bottom: 8px;
  }

  p {
    &:nth-child(3) {
      margin-top: 2px;
      margin-bottom: 8px;
      font-size: 16px
      color: #2f2e41;
    }
  }
`;
