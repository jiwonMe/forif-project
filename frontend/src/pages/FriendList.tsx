import React from "react";
import { useState } from "react";
function FriendList() {
  const [username, setusername] = useState("");

  function CreateFriend() {
    setusername("");
  }

  function FriendInput(e: any) {
    setusername(e.target.value);
  }
  return (
    <div className="friendList">
      <input
        id="username"
        type="text"
        placeholder="이름을 입력하세요"
        onChange={(e) => FriendInput(e)}
        value={username}
      ></input>
      <button onClick={() => CreateFriend()}>친구추가</button>
      <div className="friends"></div>
    </div>
  );
}

export default FriendList;
