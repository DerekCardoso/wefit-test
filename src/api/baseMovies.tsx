import axios from "axios";
import { MovieModel } from "../models/movieModel";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getMovies = async (): Promise<MovieModel[]> => {
  const { data } = await api.get("http://localhost:3000/products");
  return data;
};
