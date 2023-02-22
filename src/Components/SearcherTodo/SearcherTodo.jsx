import React, { useContext } from "react";
import ContextTodo from '../../Contexts/searchTodoContext';
import './SearcherTodo.css';

function Searchertodo (){

    const { todoFinded, setTodoFinded } = useContext(ContextTodo);

    const searchTodo = (e) => {
        setTodoFinded(e.target.value)
    }

    
    return (
        <div>
            <input
                type="text"
                className="searcher-input"
                placeholder="Ingresa una tarea"
                onChange={searchTodo}
                value={todoFinded}
            />
            <p>{todoFinded}</p>
        </div>
        
    )
}

export { Searchertodo }