import styled from "styled-components";

export const FinalizePageContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 574px;

  background-color: #fff;

  @media (max-width: 600px) {
    width: 343px;
    border-radius: 4px;
  }
`;

export const FinalizePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 64px;

  h1 {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 700;

    color: #2f2e41;
  }

  img {
    display: block;
    margin-bottom: 32px;
  }
`;
