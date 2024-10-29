import React from 'react';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    inputText: '',
    tasks: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
}

handleInputChange(event) {
    this.setState({ inputText: event.target.value });
}

handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
    tasks: [...prevState.tasks, { text: this.state.inputText, completed: false }],
    inputText: '',
    }));
}

handleDelete(index) {
    this.setState(prevState => ({
    tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
}

handleToggleComplete(index) {
    this.setState(prevState => ({
    tasks: prevState.tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    ),
    }));
}

render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
        </form>
        <ul>
        {this.state.tasks.map((task, index) => (
            <li key={index}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.handleToggleComplete(index)}
            />
            {task.text}
            <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
        ))}
        </ul>
    </div>
    );
}
}

export default App;