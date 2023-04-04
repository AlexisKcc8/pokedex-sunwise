import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonsList: [],
  filterPokeList: [],
  pokemonsGrid: [],
  filterPokeGrid: [],
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
        state.filterPokeList = action.payload.slice();
      } else {
        state = null;
      }
    },
    getPokemonsGrid: (state, action) => {
      // console.log("grid", action.payload);
      if (action.payload !== null) {
        state.pokemonsGrid = action.payload.slice();
        state.filterPokeGrid = action.payload.slice();
      } else {
        state = null;
      }
    },
    selectedPokemon: (state, action) => {
      const { view, data } = action.payload;
      let pokeSelected = {
        id: data.id,
        poke: data,
      };
      if (view === "modalShiny") {
        pokeSelected.showModal = true;
      } else {
        pokeSelected.showModal = false;
      }

      state.pokemonSelected = pokeSelected;
    },
    filterByName: (state, action) => {
      let name = action.payload;

      const pokeFilterList = state.pokemonsList.filter((poke) =>
        poke.name.toLowerCase().includes(name.toLowerCase())
      );
      const pokeFilterGrid = state.pokemonsGrid.filter((poke) =>
        poke.name.toLowerCase().includes(name.toLowerCase())
      );
      return {
        ...state,
        filterPokeList:
          name.length > 0 ? pokeFilterList : [...state.pokemonsList],
        filterPokeGrid:
          name.length > 0 ? pokeFilterGrid : [...state.pokemonsGrid],
      };
    },
  },
});

export const {
  getPokemonsList,
  getPokemonsGrid,
  selectedPokemon,
  filterByName,
} = pokeSlice.actions;
export default pokeSlice.reducer;
