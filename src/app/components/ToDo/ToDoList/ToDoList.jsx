import React, {useEffect} from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../../features/ToDo/todo.slice";


import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";

import "./ToDoList.scss" 

const ToDoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const sortedTodo = [...todos].sort((a, b) => b.id - a.id);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({ type: "todos/setTodos", payload: savedTodos });
    }
  }, [dispatch]);



  const completedTodosHandler = id => {
    dispatch(toggleComplete({ id }));
  };

  const deleteHandler = id => {
    dispatch(deleteTodo({id}))
  }

  return (
    <ul className="todo-list">
      {sortedTodo.map((todo, index) => {
        return (
          <li key={index} className="todo-element">
            <button
              onClick={() => completedTodosHandler(todo.id)}
              className="todo-btn-check"
            >
              {todo.isComplete ? <AiFillCheckSquare /> : <BiRectangle />}
            </button>
            <h3
              className={`todo-text ${
                todo.isComplete ? "todo-text-completed" : ""
              }`}
            >
              {todo.title}
            </h3>
            <button onClick={() => deleteHandler(todo.id)} className="todo-btn-delete">
              <AiFillDelete/>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
