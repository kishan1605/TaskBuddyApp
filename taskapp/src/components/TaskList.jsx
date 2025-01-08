import React from 'react'

function TaskList({ tasks, updateTask, deleteTask , removeAll}) {
    const toggleComplete = (index) => {
      const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
      updateTask(index, updatedTask);
    };

    return (
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <div>
              <span>{task.text}</span>
              <small>({task.priority}, {task.category})</small>
            </div>
            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button> 
            </div>
          </li>
        ))}
        {/* <center><button className='clear-btn' style={{display: tasks.length > 0 ? 'block' : 'none'}}
        onClick={() => removeAll()}>Remove all tasks</button></center> */}

        {tasks.length > 0 && (
          <button className='clear-btn'
          onClick={() => removeAll()}>Remove all tasks</button>
        )}
      </ul>
    );
  }
  
  export default TaskList;
