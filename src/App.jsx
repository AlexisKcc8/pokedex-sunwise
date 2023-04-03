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
  usePokemon();
  const dispatch = useDispatch();
  useEffect(() => {
    const users = getValueToLocaleStorage("usersLogin");
    if (users) {
      dispatch(getUsers(users));
    } else {
      setValueToLocaleStorage("usersLogin", {});
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
