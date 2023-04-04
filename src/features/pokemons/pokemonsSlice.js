import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonsList: [],
  pokemonsGrid: [],
  pokemonSelected: {},
};

export const pokeSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemonsList: (state, action) => {
      // console.log("list", action.payload);
      if (action.payload !== null) {
        state.pokemonsList = action.payload.slice();
      } else {
        state = null;
      }
    },
    getPokemonsGrid: (state, action) => {
      // console.log("grid", action.payload);
      if (action.payload !== null) {
        state.pokemonsGrid = action.payload.slice();
      } else {
        state = null;
      }
    },
    selectedPokemon: (state, action) => {
      console.log(action.payload);
      const { view, data } = action.payload;
      console.log(data);
      // console.log(action.payload);
      let pokeSelected = {
        id: data.id,
        name: data.name,
        shinys: data.shynis,
      };
      if (view === "modalShiny") {
        pokeSelected.showModal = true;
      } else {
        pokeSelected.showModal = false;
      }

      state.pokemonSelected = pokeSelected;
    },
  },
});

export const { getPokemonsList, getPokemonsGrid, selectedPokemon } =
  pokeSlice.actions;
export default pokeSlice.reducer;
