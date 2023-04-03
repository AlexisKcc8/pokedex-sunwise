import { useEffect } from "react";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { useDispatch, useSelector } from "react-redux";
import {
  getValueToLocaleStorage,
  setValueToLocaleStorage,
} from "./helper/localStorageFunction";
import { getUserActive } from "./features/auth/userSlice";

function App() {
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadLogin = () => {
      const userActive = getValueToLocaleStorage("userActive");
      if (userActive) {
        dispatch(getUserActive(userActive));
      } else {
        setValueToLocaleStorage("userActive", {});
      }
    };
    loadLogin();

    return () => {};
  }, []);

  return (
    <section>{userActive.statusLogin ? <MainPage /> : <LoginPage />}</section>
  );
}

export default App;
