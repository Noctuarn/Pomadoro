import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../features/Timer/timer.slice";
import todoReducer from "../features/ToDo/todo.slice";


const store = configureStore({
    reducer: {
        timer: timerReducer,
        todo: todoReducer,
    }
})

export default store;