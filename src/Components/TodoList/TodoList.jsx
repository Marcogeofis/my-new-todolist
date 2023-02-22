import React from "react";
import './TodoList.css';

function TodoList (props) {
    return (
        <section className="container--todo__list">
          <ul className="todo__list">
            {props.children}
          </ul>
        </section>
    )
}

export { TodoList }
