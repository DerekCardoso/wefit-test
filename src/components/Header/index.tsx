import { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/header-icon.png";
import { HeaderStyled } from "./styles";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const { moviesSelected } = useContext(CartContext);

  return (
    <HeaderStyled>
      <Link to="/">
        <h2>WeMovies</h2>
      </Link>

      <Link to="/cart">
        <div>
          <div className="flex-column">
            Meu carrinho
            <span> {moviesSelected.length} itens</span>
          </div>
          <div>
            <span>
              <img src={cartIcon} alt="Cart icon image" />
            </span>
          </div>
        </div>
      </Link>
    </HeaderStyled>
  );
};
