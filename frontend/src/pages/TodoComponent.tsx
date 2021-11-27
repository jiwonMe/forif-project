// Todo Component

import React from "react";
import { useState } from "react";

function TodoComponent(props: any) {
  console.log(props);
  
  return (
    <div className="todo">
      {
        props.todo.info.done ?
        <input type="checkbox" checked={true} onChange={() => props.todo.toggleTodo(props.todo.info.id)} /> :
        <input type="checkbox" onChange={() => props.todo.toggleTodo(props.todo.info.id)} />
      }
      {
        props.todo.info.done ?
        <div style={{textDecoration :"line-through"}}>{props.todo.info.text}</div> : 
        <div>{props.todo.info.text}</div>
      }
    </div>
  );
}

export default TodoComponent;
