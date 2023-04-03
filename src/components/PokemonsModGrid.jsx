import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CardPokemon } from "./CardPoke";

export const PokemonsModGrid = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemonsList);
  // console.log(pokemons);
  return (
    <ContainerModGrid>
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </ContainerModGrid>
  );
};

const ContainerModGrid = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
});
