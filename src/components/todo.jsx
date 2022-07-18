import React from "react";
import "../css/todo.css"


const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    return (
        <div className="todo">
            <li className="todo-item">{ text }</li>
            <button onClick={deleteHandler} className=" delete">COMPLETE</button>
        </div>
    )
}

export default Todo;