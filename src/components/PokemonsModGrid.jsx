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
      {loading ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : (
        <ContainerModGrid>
          {pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ContainerModGrid>
      )}
    </>
  );
};

const ContainerModGrid = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
});
const ContainerLoader = styled.section({
  width: "100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
