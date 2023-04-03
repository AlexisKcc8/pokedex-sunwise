import { useEffect } from "react";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getValueToLocaleStorage,
  setValueToLocaleStorage,
} from "./helper/localStorageFunction";
import { getUserActive, getUsers } from "./features/auth/userSlice";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("renderizo la carga de usuarios");
    const users = getValueToLocaleStorage("usersLogin");
    const userActive = getValueToLocaleStorage("userActive");
    if (users && userActive) {
      dispatch(getUsers(users));
      dispatch(getUserActive(userActive));
    } else {
      setValueToLocaleStorage("usersLogin", []);
      setValueToLocaleStorage("userActive", {});
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/main-page" element={<MainPage />}></Route>
        {/* <Route path="añadir-categoria" element={<NewCategoryPage />}></Route>
        <Route path="añadir-producto" element={<NewProductPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route> */}
      </Routes>
    </BrowserRouter>
    // <section>{userActive.statusLogin ? <MainPage /> : <LoginPage />}</section>
  );
}

export default App;
