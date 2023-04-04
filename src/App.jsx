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
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
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
        <Route path="/details-poke" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
    // <section>{userActive.statusLogin ? <MainPage /> : <LoginPage />}</section>
  );
}

export default App;
