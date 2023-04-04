import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContainerFluid } from "../components/ContainerFluid";
import styled from "styled-components";

export const DetailsPage = () => {
  const pokeSelected = useSelector((state) => state.pokemons.pokemonSelected);

  if (pokeSelected.poke === undefined) return;
  const { id, name, preview, types, skills, sprites } = pokeSelected.poke;

  console.log(sprites);
  const [selectedPoke, setSelectedPoke] = useState(pokeSelected);
  useEffect(() => {
    setSelectedPoke(pokeSelected);
    console.log(selectedPoke);
  }, []);

  return (
    <ContainerFluid>
      <ContainerContent>
        <figure>
          <img src={preview} alt="" />
        </figure>
        <ContainerInfo>
          <ContainerNameAndSkills>
            <ContainerNameAndDescription>
              <ContainerNameAndTypes>
                <h2>{name}</h2>
                <ContainerTypes>
                  <h4>Tipos:</h4>
                  {types.map((type, index) => (
                    <p key={index}>{type.type.name}</p>
                  ))}
                </ContainerTypes>
              </ContainerNameAndTypes>
              <ContainerDescription>
                Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cupiditate dignissimos, nulla nihil, aut, esse consectetur
                deserunt ab nam nemo vero odio sapiente natus maiores error
                aperiam ea. Quod, voluptatibus inventore.
              </ContainerDescription>
            </ContainerNameAndDescription>
            <ContainerSkills>
              <h3>Habilidades</h3>
              {skills.map((skills, index) => (
                <p key={index}>Habilidad: {skills.ability.name}</p>
              ))}
            </ContainerSkills>
          </ContainerNameAndSkills>
          <div
            style={{
              backgroundColor: "yellow",
            }}
          >
            <h3>Movimientos</h3>
          </div>
        </ContainerInfo>
      </ContainerContent>
    </ContainerFluid>
  );
};
const ContainerContent = styled.article({
  border: "1px solid red",
  width: "80%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ContainerInfo = styled.section({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  width: "100%",
});
const ContainerNameAndSkills = styled.article({});
const ContainerNameAndTypes = styled.article({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 0 1rem 0",
});
const ContainerNameAndDescription = styled.article({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  margin: " 0 0 2rem 0",
  border: "1px solid red",
});
const ContainerTypes = styled.article({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
});
const ContainerDescription = styled.article({
  lineHeight: "1.8rem",
});
const ContainerSkills = styled.article({
  border: "1px solid red",
  padding: "1rem",
});
