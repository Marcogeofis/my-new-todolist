import React, { useState } from 'react';

const ContextTodo = React.createContext({});

export function TodoProvider({children}){
    const [ todoFinded, setTodoFinded ] = useState([])

    return <ContextTodo.Provider value={{todoFinded, setTodoFinded}}>
        {children}
    </ContextTodo.Provider>
}

export default ContextTodo;