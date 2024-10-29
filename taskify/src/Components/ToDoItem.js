import React from "react";

const ToDoItem = ({ todo }) => {
    return (
        <div>
            <p>{todo.text}</p>
        </div>
    );
}

export default ToDoItem;
