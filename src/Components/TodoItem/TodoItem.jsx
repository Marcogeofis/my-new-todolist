import React from "react";
import './TodoItem.css';

function TodoItem (props){
    return (
        <div className="container--todo__item">
            <li className="todo--item">{props.todo}</li>
            <input className="todo--item__check" type="checkbox"/>
            <button className="butto--erase__item">Erase</button>
        </div>
    )
}

export { TodoItem };