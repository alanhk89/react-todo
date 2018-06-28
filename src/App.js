import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";

class App extends Component {
  state = {
    list: [
      { id: 1, content: "eating breakfast ⏰", status: "completed" },
      { id: 2, content: "eating lunch ⏰", status: "incompleted" },
      { id: 3, content: "eating dinner ⏰", status: "incompleted" }
    ]
  };
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Todo list={list} />
      </div>
    );
  }
}

export default App;
