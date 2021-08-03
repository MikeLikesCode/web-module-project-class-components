import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos : todos
    }
  }

  handleComplete = (id) => {
    this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id){
            return ({
              ...todo,
              completed: !todo.completed
            })
          }
          return todo
        })
    })
  }

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed !== true)
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList handleComplete={this.handleComplete} todos={this.state.todos}/>
        <TodoForm handleAddItem={this.handleAddItem} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
