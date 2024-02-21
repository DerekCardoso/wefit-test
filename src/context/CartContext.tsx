import { createContext, ReactNode, useCallback, useState } from "react";
import { MovieModel } from "../models/movieModel";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  moviesSelected: MovieModel[];
  setMoviesSelected: Function;
  isMovieAtCartCheck: (id: number) => boolean;
  handleRemoveMovieFromCart: (id: number) => void;
  setMoviesQuantity: (id: number, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [moviesSelected, setMoviesSelected] = useState<MovieModel[]>([]);

  const handleRemoveMovieFromCart = useCallback(
    (id: number) => {
      const list = moviesSelected?.filter((movie) => movie.id !== id);
      setMoviesSelected(list);
    },
    [moviesSelected]
  );

  const setMoviesQuantity = (id: number, newQuantity: number) => {
    const moviesOnCart = [...moviesSelected];
    const index = moviesOnCart.findIndex((movie) => movie.id === id);
    const movieToChangeQuantity = moviesOnCart[index];
    movieToChangeQuantity.quantity = newQuantity;
    moviesOnCart[index] = movieToChangeQuantity;
    setMoviesSelected([...moviesOnCart]);
  };

  const isMovieAtCartCheck = (id: number): boolean => {
    return moviesSelected.some((movie) => movie.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        moviesSelected,
        setMoviesSelected,
        isMovieAtCartCheck,
        handleRemoveMovieFromCart,
        setMoviesQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
