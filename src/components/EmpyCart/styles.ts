import styled from "styled-components";

export const EmptyStateCartContainer = styled.div`
  max-width: 960px;
  height: 532px;
  margin: 24px auto 24px;
  padding: 64px;

  background-color: #fff;
`;

export const EmptyStateCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 32px;

    font-size: 20px;
    font-weight: 700;
    color: #2f2e41;
  }

  img {
    display: block;
    margin-bottom: 32px;
    height: 265.8px;
    width: 447px;
  }
`;
