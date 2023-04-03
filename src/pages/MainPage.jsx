import styled from "styled-components";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";
import { PokemonsModGrid } from "../components/PokemonsModGrid";
import { PokemonsModList } from "../components/PokemonsModList";
import { useSelector } from "react-redux";
import { usePokemon } from "../hooks/usePokemon";

export const MainPage = () => {
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  const { changeViewPokemon, isViewPokemonList } = usePokemon();
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
          <ContainerBtnsChangeView>
            <MyButton event={() => changeViewPokemon(true)} title={"Lista"} />
            <MyButton
              event={() => changeViewPokemon(false)}
              bgColor={"blue"}
              title={"Cuadricula"}
            />
          </ContainerBtnsChangeView>
        </SectionSearchAndChangeView>
        {isViewPokemonList ? <PokemonsModList /> : <PokemonsModGrid />}
      </ContainerMain>
    </ContainerFluid>
  );
};
const ContainerMain = styled.section({
  width: "90%",
  minHeight: "100vh",
  // border: "1px solid red",
});

const SectionHeaderWelcome = styled.section({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  margin: "1rem 0 0 0",
});
const SectionSearchAndChangeView = styled.section({
  display: "flex",
  justifyContent: "space-between",
  padding: ".5rem 0",
});
const ContainerBtnsChangeView = styled.section({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const TitleH2 = styled.h2({
  fontSize: "2rem",
});
