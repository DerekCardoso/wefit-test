import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 309.33px;
  padding: 10px 11px;

  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 600px) {
    width: 343px;
    padding: 10px, 11px, 10px, 11px;
    margin: 8px auto; /* Centralizando o container na tela */
  }
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
