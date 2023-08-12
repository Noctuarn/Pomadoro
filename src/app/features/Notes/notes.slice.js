import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Гриби",
    text: "Треба буде встати раніше, щоб піти завтра в гриби. Надіюся що хоч щось знайдемо",
  },
  { id: 2, title: "Нотатки помадоро", text: "Передоостаній компонент" },
  { id: 3, title: "Життя", text: "Щось придумати" },
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
