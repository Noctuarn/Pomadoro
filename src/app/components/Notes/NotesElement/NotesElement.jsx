import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeNotes} from "../../../features/Notes/notes.slice"

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
              <img
                className="notes-img"
                src="https://media.istockphoto.com/id/1061711216/vector/black-isolated-icon-of-paper-clip-on-white-background-silhouette-of-paper-clip-flat-design.jpg?s=612x612&w=0&k=20&c=DvCFExvBs8pTOZ6fwkc20oaP7-ZSt9_4hYQSQ-84CqI="
                alt=""
              />
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
