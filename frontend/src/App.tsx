import React from "react";
import TimeChecker from "./pages/TimeChecker";
import TodoList from "./pages/TodoList";
import FriendList from "./pages/FriendList";
function App() {
  return (
    <div className="App">
      <FriendList />
      <TimeChecker />
      <TodoList />
    </div>
  );
}

export default App;
