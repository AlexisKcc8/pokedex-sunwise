import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pokeSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPoke: (state, action) => {
      if (action.payload !== null) {
        state.push(action.payload);
      } else {
        state = null;
      }
      // console.log(state);
      console.log(state);
    },
  },
});

export const { getPoke } = pokeSlice.actions;
export default pokeSlice.reducer;
