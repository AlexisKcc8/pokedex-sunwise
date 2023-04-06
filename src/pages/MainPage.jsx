import styled from "styled-components";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";
import { PokemonsModGrid } from "../components/PokemonsModGrid";
import { PokemonsModList } from "../components/PokemonsModList";
import { useSelector } from "react-redux";
import { usePokemon } from "../hooks/usePokemon";
import { Modal } from "../components/Modal";
export const MainPage = () => {
  const userActive = useSelector((state) => state.usersLogin.userLogin);
  const pokeSelected = useSelector((state) => state.pokemons.pokemonSelected);

  const {
    changeViewPokemon,
    isViewPokemonList,
    prevPokeList,
    nextPokeList,
    loading,
    logout,
    changeSearchTerm,
    searchTerm,
    goUp,
    showIconScrollTop,
  } = usePokemon();

  return (
    <ContainerFluid>
      <ContainerMain>
        <SectionHeaderWelcome>
          <TitleH2>Pokédex ☀️</TitleH2>
          <TitleH2>Hola 🙋 {userActive.name}</TitleH2>
          <MyButton event={logout} title="Cerrar sesión" />
        </SectionHeaderWelcome>

        <SectionSearchAndChangeView>
          <form>
            <InputForm
              type="text"
              name="filter-pokemon"
              value={searchTerm}
              handleChange={changeSearchTerm}
              placeHolder={"Buscar Pokémon"}
              urlIcon="/icons/icon-search.svg"
              altIcon="icono-filter-pokemon"
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
          <PokemonsModGrid
            loading={loading}
            goUp={goUp}
            showIconTop={showIconScrollTop}
          />
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
