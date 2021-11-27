import React from "react";
import TimeChecker from "./pages/TimeChecker";
import TodoList from "./pages/TodoList";
import FriendList from "./pages/FriendList";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  const TimeChecking = () => {
    return (
      <TimeChecker>
        <TodoList />
      </TimeChecker>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/FriendList" element={<FriendList />} />
        <Route path="/TimeChecker" element={<TimeChecking />} />
      </Routes>
    </div>
  );
}

export default App;
