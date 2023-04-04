import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CardPokemon } from "./CardPoke";
import { Loader } from "./Loader";
import { MessageInfo } from "./MessageInfo";

export const PokemonsModGrid = (props) => {
  const { loading, goUp, showIconTop } = props;
  // console.log(showIconTop);
  const pokemons = useSelector((state) => state.pokemons.filterPokeGrid);

  return (
    <>
      {showIconTop ? <IconScrollTop onClick={goUp}>☝️</IconScrollTop> : null}

      <ContainerModGrid>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <MessageInfo message="Pokemon no encontrado" />
        )}
      </ContainerModGrid>
      {loading ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : null}
    </>
  );
};

const ContainerModGrid = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  margin: "0 0 1rem 0",
  overflowY: "hidden",
});
const ContainerLoader = styled.section({
  width: "100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const IconScrollTop = styled.section({
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "var(--tbody-tr-nth-child-even)",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
  },
});
