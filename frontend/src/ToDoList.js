import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    const todoListItems = todos.map(item => <li key={item}>{item}</li>);
    //mapping each list item (function), adding each one to <li> with name of item
    return <ul>{todoListItems}</ul>;
  }
}

export default ToDoList;
