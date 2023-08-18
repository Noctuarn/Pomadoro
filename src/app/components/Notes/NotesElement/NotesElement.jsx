import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeNotes} from "../../../features/Notes/notes.slice"
import {AiOutlinePaperClip} from "react-icons/ai"


import "./NotesElement.scss"

const NotesElement = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch()

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <div key={note.id} className="notes-element">
            <button onClick={() => dispatch(removeNotes(note.id))} className="notes-btn">
              <AiOutlinePaperClip className="notes-img"/>
            </button>

            <h4 className="notes-title">{note.title}</h4>
            <p className="notes-text">{note.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotesElement;
