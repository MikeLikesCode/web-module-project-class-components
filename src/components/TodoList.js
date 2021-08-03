import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo handleComplete={props.handleComplete} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;