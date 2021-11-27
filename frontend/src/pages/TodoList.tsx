// Todo List Page

import React from "react";
import { useState } from "react";
import TodoComponent from "./TodoComponent";

var i = 0;

function TodoList() {
  type Todo = {id:number, text:string, done:boolean};
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (content: string) => {
    setTodos([...todos, {id:i++, text:content, done:false}]);
  }

  const toggleTodo = (id: number) => {
    console.log(id);
    
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    }));
  }

  return (
    <div className="TodoList">
      <div className="TodoTitle">
        오늘의 할 일
      </div>
      {
        todos.map(info => <TodoComponent todo={{info, toggleTodo}} />)
      }
      <button onClick={() => addTodo("새로운 할 일")}>새로운 할일</button>
    </div>
  );
}

export default TodoList;
