import React from "react";
import Greeting from "./Greeting";
import TodoList from "./TodoList";
class App extends React.Component {
  render() {
    const person = { name: "sunadar", age: 27 };
    return (
      <div>
        <Greeting person={person} />
        <TodoList/>
      </div>
    );
  }
}
export default App;
