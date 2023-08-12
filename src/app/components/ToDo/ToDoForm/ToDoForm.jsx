import React, { useState } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addTodos } from "../../../features/ToDo/todo.slice";

import "./ToDoForm.scss"

const ToDoForm = () => {
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);


  const addTodosHandler = () => {
    if(goal){
      dispatch(addTodos({id: todos.length + 1, title: goal}));
      setGoal('');
    }
  };

  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        placeholder="Введіть вашу ціль..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodosHandler();
        }}
        className="form-btn"
      >
        Додати
      </button>
    </form>
  );
};

export default ToDoForm;
