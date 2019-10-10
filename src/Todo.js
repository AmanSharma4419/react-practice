import React from "react";

import Header from "./Header";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

  }

  handleAddTodo = (event) => {
    if (event.keyCode === 13) {
      let todo = event.target.value;
      let todoList = this.state.todos;
      todoList.push(todo)

      this.setState({ todos: todoList });
    }
  }

  render() {
    let todos = this.state.todos;
    let headingClass = todos.length % 2 === 0 ? "heading-red" : "heading-blue";

    return (
      <div>
        <Header name="Todos" />

        <h1 className={headingClass}>Todos</h1>
        <input onKeyUp={this.handleAddTodo} type="text" placeholder="Todo..." />
        <div>
          {
            this.state.todos.map((todo) => <p>{todo}</p>)
          }
        </div>
      </div>
    );
  }
}

export default Todo;