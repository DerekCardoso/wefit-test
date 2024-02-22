import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../../components/Button/styles";
import { CartItem } from "../../components/CardItem";
import { EmptyCart } from "../../components/EmpyCart";
import { CartContext } from "../../context/CartContext";
import { CartContainer, FooterCartContainer } from "./styles";

export const Cart = () => {
  const { moviesSelected, setMoviesSelected } = useContext(CartContext);

  const totalPrice = useMemo(
    () =>
      moviesSelected.reduce((acc, movie) => {
        return acc + movie.price * (movie?.quantity ?? 1);
      }, 0),
    [moviesSelected]
  );

  return (
    <>
      {moviesSelected?.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartContainer>
          <table>
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {moviesSelected?.map((movieSelected) => (
                <CartItem
                  key={movieSelected.id}
                  id={movieSelected.id}
                  title={movieSelected.title}
                  price={movieSelected.price}
                  image={movieSelected.image}
                />
              ))}
            </tbody>
          </table>
          <hr />
          <FooterCartContainer>
            <Link to="/finalize">
              <ButtonContainer
                onClick={() => setMoviesSelected([])}
                width="finalizeButton"
                variant="primary"
              >
                Finalizar pedido
              </ButtonContainer>
            </Link>
            <div className="finalPrice">
              <span>TOTAL</span>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </span>
            </div>
          </FooterCartContainer>
        </CartContainer>
      )}
    </>
  );
};
