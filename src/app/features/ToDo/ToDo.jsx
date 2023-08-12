import React from "react";

import ToDoForm from "../../components/ToDo/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDo/ToDoList/ToDoList";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";

const ToDo = () => {
  return (
    <div className="todo app-components">
      <ComponentHeader
        title={"To Do"}
        imgSrc={
          "https://img.freepik.com/premium-vector/cute-glass-…illustration-in-doodle-style_361363-454.jpg?w=740"
        }
        rewerse={false}
      />
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default ToDo;
