import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/FriendList">친구추가</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/TimeChecker">시간측정</Link>
        </li>
      </ul>
    </div>
  );
}

export default Main;
