import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import clothingReducer from "./clothingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    clothing: clothingReducer,
  },
});
