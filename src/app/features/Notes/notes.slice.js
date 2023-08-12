import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Pomadoro Notes",
    text: "Ви зможете записувати тут свої нотатки",
  }
];

const notesSlice = createSlice({
  name: "notes",
  initialState,

  reducers: {
    addNotes(state, action) {
      state.push(action.payload);
    },

    removeNotes(state, action) {
      const id = action.payload;
      return state.filter((note) => note.id !== id);
    },
  },
});

export default notesSlice.reducer;
export const { addNotes, removeNotes } = notesSlice.actions;
