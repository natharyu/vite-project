import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: Boolean,
};

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await fetch("/auth/checkAuth");
  const data = await response.json();
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.isLogged = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLogged = false;
      });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
