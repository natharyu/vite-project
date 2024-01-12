import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice.js";
import charactersReducer from "../store/slices/charactersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
  },
});
