import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";
export type ButtonWidth = "homeButton" | "emptyCartButton" | "finalizeButton";

interface ButtonContainerProps {
  variant: ButtonVariant;
  width: ButtonWidth;
}

const buttonVariants = {
  primary: "#009EDD",
  secondary: "#039B00",
};

const buttonWidhts = {
  homeButton: "287.33px",
  emptyCartButton: "180px",
  finalizeButton: "235.42px",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 12px;

  font-weight: 700;
  color: #fff;
  border-radius: 0.2rem;
  border: none;

  ${({ variant, width }) => {
    return css`
      background-color: ${buttonVariants[variant]};
      width: ${buttonWidhts[width]};
      cursor: ${variant === "primary" ? "pointer" : "not-allowed"};
      font-size: ${width !== "homeButton" ? "14px" : "12px"};
    `;
  }}

  span {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin-right: 12px;

    font-size: 12px;
    font-weight: 400;

    img {
      margin-right: 5px;
      margin-bottom: 0;
    }
  }
`;
