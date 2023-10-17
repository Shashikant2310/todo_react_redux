import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoslice";

export const store = configureStore({
  reducer: { todoReducer },
});
