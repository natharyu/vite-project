import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  filteredCharacters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setFilteredCharacters: (state, action) => {
      state.filteredCharacters = action.payload;
    },
  },
});

export const { setCharacters, setFilteredCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
