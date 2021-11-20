// Todo List Page

import React from "react";
import TodoComponent from "./TodoComponent";

function TodoList() {
  return (
    <div className="TodoList">
      <TodoComponent content="1"/>
      <TodoComponent content="2"/>
      <TodoComponent content="3"/>
    </div>
  );
}

export default TodoList;
