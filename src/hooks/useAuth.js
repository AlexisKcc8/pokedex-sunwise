import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, newLogin } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";

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
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  useEffect(() => {
    if (userActive.statusLogin) {
      navigate("/main-page");
    } else {
      navigate("/");
    }
  }, [userActive]);

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
    if (
      userActive.statusLogin === true &&
      userActive.statusLogin !== undefined
    ) {
      navigate("/main-page");
      handleReset();
      setErrorLogin(false);
    } else {
      navigate("/");
      setErrorLogin(true);
    }
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
    errorLogin,
  };
};
