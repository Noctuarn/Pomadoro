import React, { useRef, useState } from "react";
import TimerValue from "../../components/Timer/TimerValue/TimerValue";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";

import Button from "../../UI/Button";
import "../../UI/UI.scss";

import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaRotateRight } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, setIsTimerRunning } from "../../features/Timer/timer.slice";

import "./Timer.scss";

const Timer = () => {
  const dispatch = useDispatch();

  const isTimerRunning = useSelector((state) => state.timer.isTimerRunning);
  const timerSettingsValue = useSelector(
    (state) => state.timer.timerSettingsValue
  );

  const [activeButton, setActiveButton] = useState("pomadoro");

  const [totalTimerCount, setTotalTimerCount] = useState(
    timerSettingsValue.pomadoro
  );
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      timerRef.current.start();
      dispatch(setIsTimerRunning(true));
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      timerRef.current.pause();
      dispatch(setIsTimerRunning(false));
    }
  };

  const resetTimer = () => {
    if (timerRef.current) {
      timerRef.current.stop();
      dispatch(setIsTimerRunning(false));
    }
  };

  return (
    <div className="timer app-components">
      <ComponentHeader
        title={"Timer"}
        imgSrc={
          "https://play-lh.googleusercontent.com/eaKKhSXDW7JHsMhJnW4UOxl6V_AifpnPTgHjtW6LmJGC5edHW4jPfJBuujzknTCoQA"
        }
        rewerse={false}
      />

      <div className="timer-variants">
        <Button
          onClick={() => {
            setTotalTimerCount(timerSettingsValue.pomadoro);
            setActiveButton("pomadoro");
          }}
          cN={`timer-variants-btn btn-green-outline ${
            activeButton === "pomadoro" ? "btn-active" : ""
          }`}
        >
          Помадоро
        </Button>

        <Button
          onClick={() => {
            setTotalTimerCount(timerSettingsValue.short);
            setActiveButton("short");
          }}
          cN={`timer-variants-btn btn-green-outline ${
            activeButton === "short" ? "btn-active" : ""
          }`}
        >
          Коротка
        </Button>

        <Button
          onClick={() => {
            setTotalTimerCount(timerSettingsValue.long);
            setActiveButton("long");
          }}
          cN={`timer-variants-btn btn-green-outline ${
            activeButton === "long" ? "btn-active" : ""
          }`}
        >
          Довга
        </Button>
      </div>

      <div className="timer-circle">
        <TimerValue totalCount={totalTimerCount} ref={timerRef} />
      </div>
      <div className="timer-actions">
        {isTimerRunning ? (
          <Button onClick={stopTimer} cN={"btn btn-icon"}>
            <FaPause />
          </Button>
        ) : (
          <Button onClick={startTimer} cN={"btn btn-icon"}>
            <FaPlay />
          </Button>
        )}

        <Button onClick={resetTimer} cN={"btn btn-icon"}>
          <FaRotateRight />
        </Button>

        <Button
          onClick={() => {
            dispatch(setIsOpen());
          }}
          cN={"btn btn-icon"}
        >
          <FaGear />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
