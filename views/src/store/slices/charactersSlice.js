import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  character: {},
  filteredCharacters: [],
  loading: false,
  error: null,
};

export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
  const response = await fetch("https://finalspaceapi.com/api/v0/character/");
  const data = await response.json();
  return data;
});

export const fetchCharacter = createAsyncThunk("characters/fetchCharacter", async (id) => {
  const response = await fetch(`https://finalspaceapi.com/api/v0/character/${id}`);
  const data = await response.json();
  return data;
});

export const fetchRandomCharacter = createAsyncThunk("characters/fetchRandomCharacter", async () => {
  const response = await fetch("https://finalspaceapi.com/api/v0/character/");
  const data = await response.json();
  const result = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!result.includes(data[randomIndex])) {
      result.push(data[randomIndex]);
    } else {
      i--;
    }
  }
  return result;
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getFilteredCharacters: (state, action) => {
      if (state.filteredCharacters.length === 0) {
        return (state.filteredCharacters = []);
      }
      state.filteredCharacters = state.characters.filter((character) =>
        character.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        }
      )
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
        state.filteredCharacters = action.payload;
      })
      .addCase(fetchRandomCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.character = action.payload;
      });
  },
});

export const { setCharacters, getFilteredCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
