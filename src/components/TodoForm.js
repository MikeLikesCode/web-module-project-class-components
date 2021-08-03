import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
    this.setState({
        ...this.state,
        inputValue: ''
    })
  };

  render() {
    return (
      <form>
        <input type="text" name="todo" onChange={this.handleChange} value={this.state.inputValue} />
        <button onClick={this.handleClick}>Add Todo</button>
        <button onClick={this.props.handleClear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
