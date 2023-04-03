import React from "react";
import styled from "styled-components";
import { MyButton } from "./MyButton";

export const CardPokemon = (props) => {
  const { pokemon } = props;

  return (
    <CardPoke>
      <FigureImg>
        <ImgPokemon src={pokemon.preview} alt={`imagen-${pokemon.name}`} />
      </FigureImg>
      <div style={{ width: "100%" }}>
        <h2>{pokemon.name}</h2>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1rem",
        }}
      >
        <p>habilidades:</p>
        {pokemon.skills.map((skills, index) => (
          <p key={index}>{skills.ability.name}</p>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            gap: "1rem",
          }}
        >
          {pokemon.types.map((type, index) => (
            <p key={index}>{type.type.name}</p>
          ))}
        </div>
        <div>
          <MyButton title={"Shiny"} />
        </div>
      </div>
    </CardPoke>
  );
};

const CardPoke = styled.section({
  border: "1px solid var(--bg-thead)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  borderRadius: ".5rem",
});
const FigureImg = styled.figure({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffcc",
  borderRadius: ".5rem",
});
const ImgPokemon = styled.img({
  width: "70%",
  height: "100%",
});
