import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "../features/pokemons/pokemonsSlice";
import usersReducer from "../features/auth/userSlice";
export const store = configureStore({
  reducer: {
    usersLogin: usersReducer,
    pokemons: pokeReducer,
  },
});
