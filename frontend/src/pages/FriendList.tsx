import React from "react";
import { useState } from "react";
function FriendList() {
  const [username, setusername] = useState("");
  const [friendArr, setfriendArr] = useState<string[]>([]);
  const test_arr: string[] = ["수지", "아이린", "카리나"]; //testing arr, reprsent Firestore.

  function CheckFriend() {
    //If it is already friend, reject.
    if (friendArr.includes(username)) {
      alert("이미 친구 목록에 존재합니다.");
    }

    //Correct, Put in list.
    else if (test_arr.includes(username)) {
      setfriendArr([...friendArr, username]);
      setusername("");
    }

    //If there's no name like that, reject.
    else {
      alert("이름이 존재하지 않습니다, 한번 더 확인해주세요");
    }
  }

  return (
    <div className="friendList">
      <input
        id="username"
        type="text"
        placeholder="이름을 입력하세요"
        onChange={(e) => {
          setusername(e.target.value);
        }}
        value={username}
      ></input>
      <button onClick={() => CheckFriend()}>친구추가</button>
      <ul className="friends">
        {friendArr.map((friend) => {
          return <li key={friend}>{friend}</li>;
        })}
      </ul>
    </div>
  );
}

export default FriendList;
