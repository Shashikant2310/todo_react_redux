import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.todoList = state.todoList.filter(
        (item, ind) => ind !== action.payload
      );
    },
  },
});

export const { addToList, deleteNote } = todoslice.actions;

export default todoslice.reducer;
