import { Link } from "react-router-dom";
import cartIcon from "../../assets/header-icon.png";
import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <h2>WeMovies</h2>
      </Link>

      <div>
        <div className="flex-column">
          <Link to="/cart">Meu carrinho</Link>
          <span> itens</span>
        </div>
        <div>
          <span>
            <img src={cartIcon} alt="Cart icon image" />
          </span>
        </div>
      </div>
    </HeaderStyled>
  );
};
