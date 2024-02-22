import { useContext, useState } from "react";
import minusIcon from "../../assets/minus-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import { CartContext } from "../../context/CartContext";
import { CartItemContent } from "./styles";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const CartItem = ({ id, title, price, image }: CartItemProps) => {
  const { handleRemoveMovieFromCart, setMoviesQuantity } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <CartItemContent>
      <td>
        <div>
          <img src={image} alt="Capa do filme" className="movie-cover" />
          <div className="title">
            <h4>{title}</h4>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </span>
          </div>
        </div>
      </td>
      <td>
        <div className="count">
          <button
            disabled={quantity === 1}
            onClick={() => {
              setMoviesQuantity(id, quantity - 1);
              setQuantity(quantity - 1);
            }}
          >
            <img src={minusIcon} alt="Botão menos" />
          </button>
          <input readOnly type="text" value={quantity} />
          <button
            onClick={() => {
              setMoviesQuantity(id, quantity + 1);
              setQuantity(quantity + 1);
            }}
          >
            <img src={plusIcon} alt="Botão mais" />
          </button>
        </div>
      </td>
      <td>
        <span className="price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price * quantity)}
        </span>
      </td>
      <td>
        <button
          className="trashButton"
          onClick={() => handleRemoveMovieFromCart(id)}
        >
          <img src={trashIcon} alt="Botão remover" />
        </button>
      </td>
    </CartItemContent>
  );
};
