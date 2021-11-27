import React from "react";
import TimeChecker from "./pages/TimeChecker";
import TodoList from "./pages/TodoList";
import FriendList from "./pages/FriendList";

import './App.css';

function App() {
  return (
    <div className="App">
      <FriendList />
      <TimeChecker>
        <TodoList />
      </TimeChecker>
    </div>
  );
}

export default App;
