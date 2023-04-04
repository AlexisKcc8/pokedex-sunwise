import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectedPokemon } from "../features/pokemons/pokemonsSlice";

export const Modal = (props) => {
  const { data } = props;
  const { name } = data;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(selectedPokemon({ view: "close", data: {} }));
  };

  return (
    <ContainerModal onClick={closeModal} className="modal">
      <IconClose onClick={closeModal}>❎</IconClose>

      <ContenModal className="modal__content">
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
  width: "70%",
  position: "fixed",
  top: "0rem",
  left: "0rem",
  right: "0",
  bottom: "0",
  margin: "0 auto",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  overscrollBehaviorY: "contain",
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
