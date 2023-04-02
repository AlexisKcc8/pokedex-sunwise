import styled from "styled-components";
import { InputForm } from "../components/InputForm";
import { MyButton } from "../components/MyButton";
import { ContainerFluid } from "../components/ContainerFluid";
import { PokemonsModGrid } from "../components/PokemonsModGrid";
import { PokemonsModList } from "../components/PokemonsModList";

export const MainPage = () => {
  return (
    <ContainerFluid>
      <ContainerMain>
        <SectionHeaderWelcome>
          <TitleH2>Pokédex</TitleH2>
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
            <MyButton bgColor={"blue"} title={"Lista"} />
            <MyButton title={"Cuadricula"} />
          </section>
        </SectionSearchAndChangeView>
        <PokemonsModList />
        {/* <PokemonsModGrid /> */}
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
  margin: "2rem 0 0 0",
});
const SectionSearchAndChangeView = styled.section({
  border: "1px solid red",
  display: "flex",
  justifyContent: "space-between",
  padding: ".5rem 0",
});
const TitleH2 = styled.h2({
  fontSize: "3rem",
});
