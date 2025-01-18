import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [{ id: 1, todo: "Makan" }],
  reducers: {
    addToDo: (state, value) => {
      state.push({ id: state.length + 1, todo: value.payload });
    },
    updateToDo: (state, value) => {
      const index = state.findIndex((todo) => todo.id === value.payload.id);
      if (value.payload.todo !== "") state[index].todo = value.payload.todo;
    },
    removeTodo: (state, value) => {
      const index = state.findIndex((todo) => todo.id === value.payload.id);
      state.splice(index, 1);
    },
  },
});

export default todoSlice;
export const { addToDo, updateToDo, removeTodo } = todoSlice.actions;
