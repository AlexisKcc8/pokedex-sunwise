import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokemonsSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokeReducer,
  },
});
