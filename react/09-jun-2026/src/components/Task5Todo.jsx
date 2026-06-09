import React, { useState } from 'react';

const Task5Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Task 5: Todo Counter</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map(t => (
            <li key={t.id}>
              {t.text} 
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      
      <p>Total Tasks: {tasks.length}</p>
      <hr />
    </div>
  );
};

export default Task5Todo;
