import React, { useState } from "react";

import { ImCross } from "react-icons/im";

import Button from "../../../UI/Button";
import "../../../UI/UI.scss";

import { useDispatch, useSelector } from "react-redux";
import {setIsOpen, setTimerSettingsValue} from "../../../features/Timer/timer.slice";


import "./TimerSettings.scss";

const TimerSettings = () => {
  const isOpen = useSelector((state) => state.timer.isOpen);
  const dispatch = useDispatch();

  const timerSettingsValue = useSelector(
    (state) => state.timer.timerSettingsValue
  );

  const [pomadoroTimer, setPomadoroTimer] = useState(timerSettingsValue.pomadoro);
  const [shortBreakTimer, setShortBreakTimer] = useState(timerSettingsValue.short);
  const [longBreakTimer, setLongBreakTimer] = useState(timerSettingsValue.long);

  return (
    <div className={`timer-settings ${isOpen ? "open" : "closed"}`}>
      <Button
        onClick={() => dispatch(setIsOpen())}
        cN={"btn-icon btn btn-exit"}
      >
        <ImCross />
      </Button>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="timer-settings-form"
      >
        <label htmlFor="pomadoro-timer-value">Таймер помадоро</label>
        <input
          id="pomadoro-timer-value"
          type="number"
          onChange={(e) => {
            setPomadoroTimer(e.target.value);
          }}
          value={pomadoroTimer}
        />

        <label htmlFor="short-timer-value">Коротка перерва</label>
        <input
          id="short-timer-value"
          type="number"
          onChange={(e) => {
            setShortBreakTimer(e.target.value);
          }}
          value={shortBreakTimer}
        />

        <label htmlFor="long-timer-value">Довга перерва</label>
        <input
          id="long-timer-value"
          type="number"
          onChange={(e) => {
            setLongBreakTimer(e.target.value);
          }}
          value={longBreakTimer}
        />

        <div className="timer-settings-actions">

          <Button onClick={() => {
              setPomadoroTimer(25);
              setShortBreakTimer(5);
              setLongBreakTimer(15);

              dispatch(
                setTimerSettingsValue({
                  pomadoroValue: pomadoroTimer,
                  shortValue: shortBreakTimer,
                  longValue: longBreakTimer,
                })
              );
              dispatch(setIsOpen());
            }} cN={"btn btn-brown btn-settings"} > Скинути до станд</Button>

        
          <button
            onClick={() => {
              dispatch(
                setTimerSettingsValue({
                  pomadoroValue: pomadoroTimer,
                  shortValue: shortBreakTimer,
                  longValue: longBreakTimer,
                })
              );
              dispatch(setIsOpen());
            }}
            className="btn btn-green btn-settings"
          >
            Підтвердити
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimerSettings;
