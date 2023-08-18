import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import hisTheme from "../../../assets/music/his_theme.mp3";

import { BiSolidMusic } from "react-icons/bi";

import "./AudioPlayer.scss";

const AudioPlayer = () => {
  const [isOpen, setisOpen] = useState(true);

    const playerOpenHandler = () => {
        setisOpen(prev => !prev);
    }

  return (
    <div className="audio-player">
      <ReactAudioPlayer
        className={`audio-player-action${isOpen ? '-open' : ""}`}
        src={hisTheme}
        controls
      />
      <button onClick={playerOpenHandler} className="btn btn-icon btn-player">
        <BiSolidMusic />
      </button>
    </div>
  );
};

export default AudioPlayer;
