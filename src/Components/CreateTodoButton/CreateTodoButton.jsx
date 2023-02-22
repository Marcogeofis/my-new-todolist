import React from 'react';
import useTodoHook from '../../hook/TodoHook';
import './CreateTodoButton.css'

function CreateTodoButton () {

    const { addTodo } = useTodoHook()
    return (
        <button onClick={addTodo} className='button--create__todo'>Add Todo</button>
    )
}

export { CreateTodoButton };