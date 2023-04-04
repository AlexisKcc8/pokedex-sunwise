import styled from "styled-components";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";
import { PokemonsModGrid } from "../components/PokemonsModGrid";
import { PokemonsModList } from "../components/PokemonsModList";
import { useSelector } from "react-redux";
import { usePokemon } from "../hooks/usePokemon";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const MainPage = () => {
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  const pokeSelected = useSelector((state) => state.pokemons.pokemonSelected);
  const navigate = useNavigate();
  const {
    changeViewPokemon,
    isViewPokemonList,
    prevPokeList,
    nextPokeList,
    loading,
    closeSession,
  } = usePokemon();

  useEffect(() => {
    if (!userActive.statusLogin) {
      navigate("/");
    }
  }, [userActive]);

  return (
    <ContainerFluid>
      <ContainerMain>
        <SectionHeaderWelcome>
          <TitleH2>Pokédex ☀️</TitleH2>
          <TitleH2>Hola 🙋 {userActive.name}</TitleH2>
          <MyButton event={closeSession} title="Cerrar sesión" />
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

        {isViewPokemonList ? (
          <PokemonsModList
            loading={loading}
            nextPokeList={nextPokeList}
            prevPokeList={prevPokeList}
          />
        ) : (
          <PokemonsModGrid loading={loading} />
        )}
      </ContainerMain>
      {pokeSelected.showModal ? <Modal data={pokeSelected} /> : null}
    </ContainerFluid>
  );
};
const ContainerMain = styled.section({
  width: "90%",
  minHeight: "100vh",
});

const SectionHeaderWelcome = styled.section({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
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
