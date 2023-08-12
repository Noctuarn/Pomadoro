import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "../../../features/Notes/notes.slice";

import "./NotesForm.scss"

const NotesForm = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <form className="notes-form">
      <input
      onChange={e => setNoteTitle(e.target.value)}
        value={noteTitle}
        className="notes-form-input"
        type="text"
        placeholder="Введіть назву нотатку..."
        />
      <input
      onChange={e => setNoteText(e.target.value)}
        value={noteText}
        className="notes-form-input"
        type="text"
        placeholder="Введіть опис нотатку..."
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addNotes({id: notes.length + 1, title: noteTitle, text: noteText }))
          setNoteTitle("")
          setNoteText("")
        }}
        className="notes-form-btn"
      >
        Додати нотатку
      </button>
    </form>
  );
};

export default NotesForm;
