import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CardPokemon } from "./CardPoke";
import { Loader } from "./Loader";

export const PokemonsModGrid = (props) => {
  const { loading } = props;
  const pokemons = useSelector((state) => state.pokemons.pokemonsGrid);
  return (
    <>
      <ContainerModGrid>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
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
