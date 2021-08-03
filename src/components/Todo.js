import React from 'react'

const Todo = props => {
    const handleClick = () => {
        props.handleComplete(props.todo.id)
    }

    return(
        <div onClick={handleClick} style={ props.todo.completed ? { textDecoration: 'line-through' } : {textDecoration: 'none'}}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo