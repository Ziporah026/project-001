import React, { useState } from 'react';
import Header from './Components/Header.js';
import ToDoForm from './Components/ToDoForm.js';
import ToDoList from './Components/ToDoList.js';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {

    setTodos([...todos, todo]);

  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
