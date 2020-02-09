import React, { Component } from "react";
import TodoItem from "./ToDoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>To do</h2>
        <TodoItem />
      </section>
    );
  }
}
