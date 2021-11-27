import React from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";
function Main() {
  return (
    <div className="main">
      <div className="titles">
        <h1 className="mainTitle">십품타</h1>
        <h3 className="subTitle">열품타 클론 프로젝트</h3>
      </div>
      <div className="links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/FriendList">
          <button>친구추가</button>
        </Link>
        <Link to="/TimeChecker">
          <button>시간측정</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
