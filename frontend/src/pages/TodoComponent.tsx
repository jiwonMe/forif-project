// Todo Component

import React from "react";
import { useState } from "react";

function TodoComponent(props: any) {
  return (
    <div className="todo">
      {props.content}
      <br></br>
      {props.isDone ? "Done" : "Not Done"}
    </div>
  );
}

export default TodoComponent;
