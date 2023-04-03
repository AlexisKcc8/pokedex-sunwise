import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, newLogin, getUsers } from "../features/auth/userSlice";
import {
  getValueToLocaleStorage,
  setValueToLocaleStorage,
} from "../helper/localStorageFunction";

const initialStateUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialStateUser);
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordEquals, setPasswordEquals] = useState(true);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  useEffect(() => {
    const usersLogin = getValueToLocaleStorage("usersLogin");
    if (usersLogin) {
      dispatch(getUsers(usersLogin));
    } else {
      setValueToLocaleStorage("usersLogin", []);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignUp) {
      login();
    } else {
      newRegister();
    }
  };
  const handleChange = (e) => {
    let prop = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [prop]: value,
    });
  };
  const handleReset = () => {
    setUser(initialStateUser);
  };
  const login = () => {
    const { email, password } = user;
    let dataLogin = {
      email,
      password,
    };
    dispatch(newLogin(dataLogin));
    handleReset();
  };
  const newRegister = () => {
    if (user.password !== user.confirmPassword) {
      setPasswordEquals(false);
      return;
    } else {
      setPasswordEquals(true);
      dispatch(addUser(user));
      handleReset();
      setRegisterSuccess(true);
      setTimeout(() => {
        setRegisterSuccess(false);
      }, 3000);
    }
  };

  const newSignUp = (isSignUp) => {
    setIsSignUp(isSignUp);
  };
  return {
    handleSubmit,
    handleChange,
    newSignUp,
    user,
    isSignUp,
    passwordEquals,
    registerSuccess,
  };
};
