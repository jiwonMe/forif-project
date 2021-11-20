// Todo Component

import React from "react";

class TodoComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: this.props.content,
      isDone: false,
    };
  }

  state = {
    content: "",
    isDone: false,
  }

  render() {
    return (
      <div className="todo">
        {this.state.content}
        <br></br>
        {this.state.isDone ? "Done" : "Not Done"}
      </div>
    );
  }
}

export default TodoComponent;