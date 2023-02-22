import { useState, useEffect } from 'react';

function useTodoHook(){
    const todo = [
        {todo: "Hacer la cama", completed:false},
        {todo: "Hacer la cena", completed:false},
        {todo: "Preparar tema de física", completed:false}
    ]

    const [ newTodo, setTodo ] = useState([]);

    const addTodo = (text) => {
        const anotherTodo = {
            completed: false,
            todo: text,
        }
        todo.push(anotherTodo)
    }


    useEffect(() => {
        setTodo(todo);
    },[])
    
    return {newTodo, addTodo};

}

export default useTodoHook;