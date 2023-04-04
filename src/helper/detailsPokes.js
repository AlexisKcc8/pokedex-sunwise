import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedPokemon } from "../features/pokemons/pokemonsSlice";

export const detailsPokes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showModalShinys = (e, data) => {
    console.log(data);
    if (e.target.name === "my-button") {
      dispatch(selectedPokemon({ view: "modalShiny", data }));
    }
  };
  const showDetails = (e, data) => {
    e.stopPropagation();
    if (e.target.name !== "my-button") {
      dispatch(selectedPokemon({ view: "detailsPoke", data }));
      navigate("/details-poke");
    }
  };
  return {
    showDetails,
    showModalShinys,
  };
};
