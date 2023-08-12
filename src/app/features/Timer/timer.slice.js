import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isTimerRunning: false,
  timerSettingsValue: {pomadoro: 25, short: 5, long: 15},
};

const timerSlicer = createSlice({
  name: "timer",
  initialState,

  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },

    setIsTimerRunning(state, action) {
      state.isTimerRunning = action.payload;
    },

    setTimerSettingsValue(state, action){
      const {pomadoroValue, shortValue, longValue} = action.payload
      state.timerSettingsValue = {pomadoro: pomadoroValue, short: shortValue, long: longValue}
    }
  },
});

export default timerSlicer.reducer;
export const { setIsOpen, setIsTimerRunning, setTimerSettingsValue } = timerSlicer.actions;
