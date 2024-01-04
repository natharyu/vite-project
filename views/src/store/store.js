import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import charactersReducer from "../features/charactersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
  },
});
