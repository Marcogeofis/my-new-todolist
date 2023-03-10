import React from 'react';
import { Header } from './Components/Header/Header';
import { TitleTodos } from './Components/TitleTodos/TitleTodos';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { Searchertodo } from './Components/SearcherTodo/SearcherTodo';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import useTodoHook from './hook/TodoHook';

import './App.css';

function App() {

  const {newTodo} = useTodoHook();

console.log(newTodo)
  return (
    <div className="App">
      <Header />
      <TitleTodos />
      <Searchertodo />
      <TodoList>
        {newTodo.map(el => {
          return <TodoItem 
                  key={el.todo}
                  todo={el.todo}
                  />
          })
        }
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

