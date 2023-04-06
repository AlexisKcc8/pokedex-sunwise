import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getValueToLocaleStorage } from "../../helper/localStorageFunction";
const DEFAULT_NEW_USERS_STATE = [];
const DEFAULT_USER_ACTIVE_STATE = {
  name: "",
  email: "",
  statusLogin: false,
};
const initialState = {
  userLogin: (() => {
    const persistedState = getValueToLocaleStorage("userActive");
    return persistedState ? persistedState : DEFAULT_USER_ACTIVE_STATE;
  })(),
  newUsers: (() => {
    const persistedState = getValueToLocaleStorage("usersLogin");
    return persistedState ? persistedState : DEFAULT_NEW_USERS_STATE;
  })(),
};

export const usersSlice = createSlice({
  name: "usersLogin",
  initialState,
  reducers: {
    newLogin: (state, action) => {
      const { email, password } = action.payload;
      const findUser = state.newUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (findUser === undefined) {
        state.userLogin = {};
      } else {
        let newLogin = {
          name: findUser.name,
          email: findUser.email,
          statusLogin: true,
        };
        state.userLogin = newLogin;
      }
    },
    addUser: (state, action) => {
      const { email, password, name } = action.payload;
      let userNew = {
        id: uuid(),
        name,
        email,
        password,
      };
      state.newUsers.push(userNew);
    },
  },
});

export const { newLogin, addUser, getUsers, getUserActive } =
  usersSlice.actions;
export default usersSlice.reducer;
