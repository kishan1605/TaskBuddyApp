import React, { useState } from 'react'

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});
        setPriority("Medium");
        setCategory("General");
        setTask("");
    }

  return (
    <form onSubmit={handleSubmit} class="task-form">
        <div>
            <input
            type='text'
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
            placeholder='Enter the task' />
            <button type='submit'>Add Task</button>
        </div>

        <div>
            <select
            onChange={(e) => setPriority(e.target.value)}>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
                <option value='Low'>Low</option>
            </select>
            <select
            onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}
