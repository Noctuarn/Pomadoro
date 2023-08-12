import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {

    setTodos: (state, action) => {
      return action.payload;
    },

    addTodos(state, action) {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    toggleComplete(state, action) {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }

      localStorage.setItem("todos", JSON.stringify(state));
    },

    deleteTodo(state, action) {
      const { id } = action.payload;
      const updatedState = state.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedState));

      return updatedState;
    },
  },
});

export const { addTodos, toggleComplete, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
