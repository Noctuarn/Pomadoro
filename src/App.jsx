import { useState } from "react";
import Timer from "./app/features/Timer/Timer";
import TimerSettings from "./app/components/Timer/TimerSettings/TimerSettings";
import ToDo from "./app/features/ToDo/ToDo";
import Notes from "./app/features/Notes/Notes";
import NotesElement from "./app/components/Notes/NotesElement/NotesElement";
import AudioPlayer from "./app/components/AudioPlayer/AudioPlayer";
import NavBar from "./app/components/Navbar/NavBar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <div className="app-content">
        <TimerSettings />
        <Timer />
        <ToDo />
        <Notes />
        <NotesElement />
        <AudioPlayer/>
      </div>
    </div>
  );
}

export default App;
