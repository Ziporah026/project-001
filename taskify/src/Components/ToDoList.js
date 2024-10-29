import React from "react";
import ToDoItem from './ToDoItem.js';

function ToDoList({ todos }) {
    return (
        <div>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default ToDoList;