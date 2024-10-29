import React from 'react';
import ToDoButton from './ToDoButton.js';
function Header(){
return (
    <header>
        <h1>TASKIFY</h1>
        <ToDoButton />  {/* New component added */}  
    </header>
);

}

export default Header;