import React, { Component } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Hi",
      todos: ["Add a todo", "Remove todo"]
    };
  }
  componentDidMount() {
    fetch("https://localhost:44387/api/todos") //from console, will show 'value 1 value 2'
      .then(res => res.json())
      .then(json => /*console.log(json));*/ this.setState({ todos: json }));
  }
  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };

  setText = text => {
    this.setState({ currentItemText: text });
    //sets currentItemText to whatever you (pass in)
  };

  addNew = text => {
    fetch("http://localhost:44387/api/todos", {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const newTodos = [...this.state.todos, text];
          this.setState({ todos: newTodos });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  //addnew takes text, makes 'newTodos', which is an array of the todos already there and the text

  render() {
    return (
      <div>
        <AddToDo
          text={this.state.currentItemText}
          setText={this.setText}
          addNew={this.addNew}
        />{" "}
        <ToDoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default App;
/*addNew = text => {
  const newTodos = [...this.state.todos, text];
  this.setState({ todos: newTodos });
  //addnew takes text, makes 'newTodos', which is an array of the todos already there and the text
};*/
