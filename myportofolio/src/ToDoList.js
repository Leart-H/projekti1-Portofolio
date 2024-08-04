import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <section className="todolist">
            <h2>To-Do List</h2>
            <div className="task-input">
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
