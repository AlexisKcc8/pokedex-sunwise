import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "../features/pokemons/pokemonsSlice";
import usersReducer from "../features/auth/userSlice";
const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    "usersLogin",
    JSON.stringify(store.getState().usersLogin.newUsers)
  );
  localStorage.setItem(
    "userActive",
    JSON.stringify(store.getState().usersLogin.userLogin)
  );
};
export const store = configureStore({
  reducer: {
    usersLogin: usersReducer,
    pokemons: pokeReducer,
  },
  middleware: [persistanceLocalStorageMiddleware],
});
