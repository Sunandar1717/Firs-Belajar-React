import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      input: "",
    };
  }

  onsubmit() {
    const currentTodoList = this.state.todoList;
    currentTodoList.push(this.state.input);
    this.setState({ todoList: currentTodoList });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <label>Input new todo list</label>
        <br />
        <input
          onChange={(event) => this.setState({ input: event.target.value })}>
              
          </input>

        <button onClick={() => this.onsubmit()}> Clic donk om</button>

        {this.state.todoList.map((todoList) => (
          <p>{todoList}</p>
        ))}
      </div>
    );
  }
}

export default TodoList;
