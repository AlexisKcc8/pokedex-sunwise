import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonsList: [],
  pokemonsGrid: [],
};

export const pokeSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemonsList: (state, action) => {
      if (action.payload !== null) {
        state.pokemonsList = action.payload.slice();
      } else {
        state = null;
      }
    },
    getPokemonsGrid: (state, action) => {
      if (action.payload !== null) {
        state.pokemonsList = action.payload.slice();
      } else {
        state = null;
      }
    },
  },
});

export const { getPokemonsList, getPokemonsGrid } = pokeSlice.actions;
export default pokeSlice.reducer;
