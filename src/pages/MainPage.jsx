import styled from "styled-components";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";
import { PokemonsModGrid } from "../components/PokemonsModGrid";
import { PokemonsModList } from "../components/PokemonsModList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getValueToLocaleStorage,
  setValueToLocaleStorage,
} from "../helper/localStorageFunction";
import { getUserActive } from "../features/auth/userSlice";

export const MainPage = () => {
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  const dispatch = useDispatch();
  const [isViewPokemonList, setIsViewPokemonList] = useState(true);
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
  const changeViewPokemon = () => {
    setIsViewPokemonList(!isViewPokemonList);
  };
  return (
    <ContainerFluid>
      <ContainerMain>
        <SectionHeaderWelcome>
          <TitleH2>Pokédex</TitleH2>
          <TitleH2>Hola {userActive.name}</TitleH2>
        </SectionHeaderWelcome>
        <SectionSearchAndChangeView>
          <form>
            <InputForm
              urlIcon="/icons/icon-search.svg"
              altIcon="icono-busqueda"
              type={"text"}
              placeHolder={"Buscar Pokémon"}
            />
          </form>
          <section style={{ border: "1px solid blue" }}>
            <MyButton event={changeViewPokemon} title={"Lista"} />
            <MyButton
              event={changeViewPokemon}
              bgColor={"blue"}
              title={"Cuadricula"}
            />
          </section>
        </SectionSearchAndChangeView>
        {isViewPokemonList ? <PokemonsModList /> : <PokemonsModGrid />}
      </ContainerMain>
    </ContainerFluid>
  );
};
const ContainerMain = styled.section({
  width: "90%",
  height: "100vh",
  border: "1px solid red",
});

const SectionHeaderWelcome = styled.section({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  margin: "1rem 0 0 0",
});
const SectionSearchAndChangeView = styled.section({
  border: "1px solid red",
  display: "flex",
  justifyContent: "space-between",
  padding: ".5rem 0",
});
const TitleH2 = styled.h2({
  fontSize: "2rem",
});
