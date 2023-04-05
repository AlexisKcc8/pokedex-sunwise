import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route path="/main-page" element={<MainPage />}></Route>
        <Route path="/details-poke" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
