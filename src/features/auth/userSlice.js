import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { setValueToLocaleStorage } from "../../helper/localStorageFunction";
const initialState = {
  userLogin: {
    name: "",
    email: "",
    statusLogin: false,
  },
  newUsers: [],
};

export const usersSlice = createSlice({
  name: "usersLogin",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.newUsers.push(...action.payload);
    },
    getUserActive: (state, action) => {
      state.userLogin = action.payload;
    },
    newLogin: (state, action) => {
      const { email, password } = action.payload;
      const findUser = state.newUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (findUser === undefined) {
        return state.userLogin;
      } else {
        state.userLogin.name = findUser.name;
        state.userLogin.email = findUser.email;
        state.userLogin.statusLogin = true;
        console.log(state.userLogin);
        setValueToLocaleStorage("userActive", state.userLogin);
      }
    },

    addUser: (state, action) => {
      const { email, password, name } = action.payload;
      let newUser = {
        id: uuid(),
        name,
        email,
        password,
      };
      setValueToLocaleStorage("usersLogin", [...state.newUsers, newUser]);
    },
  },
});

export const { newLogin, addUser, getUsers, getUserActive } =
  usersSlice.actions;
export default usersSlice.reducer;
