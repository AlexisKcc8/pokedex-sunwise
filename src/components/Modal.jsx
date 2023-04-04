import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectedPokemon } from "../features/pokemons/pokemonsSlice";

export const Modal = (props) => {
  const { data } = props;
  const { name } = data;
  console.log(data);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(selectedPokemon({ view: "close", data: {} }));
  };

  return (
    <ContainerModal onClick={closeModal}>
      <IconClose onClick={closeModal}>❎</IconClose>

      <ContenModal>
        <h2>Shinys de {name}</h2>
      </ContenModal>
    </ContainerModal>
  );
};

const ContainerModal = styled.section({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--bg-modal)",
  zIndex: "200",
});

const ContenModal = styled.article({
  width: "90%",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const IconClose = styled.h2({
  position: "fixed",
  top: "1rem",
  right: "1rem",
  fontSize: "3rem",
  "&:hover": {
    cursor: "pointer",
  },
});
