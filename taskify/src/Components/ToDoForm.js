import React, { useState } from "react";

function ToDoForm({ addToDo }) {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        });
        setInput('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a task" 
            value={input} 
            onChange={(e) =>
            setInput(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
}


export default ToDoForm;