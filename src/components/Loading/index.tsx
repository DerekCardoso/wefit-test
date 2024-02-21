import loadingIcon from "../../assets/loading-icon.png";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loadingIcon} alt="Ícone carregando" />
    </LoadingContainer>
  );
};
