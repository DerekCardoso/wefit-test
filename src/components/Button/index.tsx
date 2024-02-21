import { ButtonContainer, ButtonVariant, ButtonWidth } from "./styles";
interface ButtonProps {
  variant: ButtonVariant;
  width: ButtonWidth;
  buttonText: string;
  onClick?: Function;
}

export const Button = ({
  variant = "primary",
  width = "homeButton",
  buttonText,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer width={width} variant={variant} onClick={() => onClick}>
      {buttonText}
    </ButtonContainer>
  );
};
