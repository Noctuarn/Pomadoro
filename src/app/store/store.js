import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "../features/Timer/timer.slice";
import todoReducer from "../features/ToDo/todo.slice";
import notesReducer from "../features/Notes/notes.slice";

const store = configureStore({
    reducer: {
        timer: timerReducer,
        todo: todoReducer,
        notes: notesReducer
    }
})

export default store;