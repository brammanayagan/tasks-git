import React, { useState } from 'react';

const Crud = () => {
  // State for our list of todos
  const [todos, setTodos] = useState([]);
  
  // State for the text input field
  const [inputValue, setInputValue] = useState('');
  
  // State to track which todo we are currently editing (null means we are adding a new one)
  const [editId, setEditId] = useState(null);

  // 1. CREATE / UPDATE
  const handleAddOrUpdate = () => {
    if (!inputValue.trim()) return; // Don't add empty tasks

    if (editId !== null) {
      // Update existing todo
      const updatedTodos = todos.map(todo => 
        todo.id === editId ? { ...todo, text: inputValue } : todo
      );
      setTodos(updatedTodos);
      setEditId(null); // Clear editing state
    } else {
      // Create new todo
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]);
    }
    setInputValue(''); // Clear input field
  };

  // 3. Set up the UPDATE state
  const handleEdit = (todo) => {
    setInputValue(todo.text); // Put the text into the input field
    setEditId(todo.id); // Remember which todo we're editing
  };

  // 4. DELETE
  const handleDelete = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px', borderRadius: '5px' }}>
      <h2>Simple CRUD Todo</h2>
      
      {/* Input area */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <button onClick={handleAddOrUpdate} style={{ padding: '5px 10px' }}>
          {editId !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      {/* 2. READ (List area) */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.length === 0 && <p>No tasks yet. Add one!</p>}
        
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}>{todo.text}</span>
            
            <button onClick={() => handleEdit(todo)} style={{ marginRight: '5px', cursor: 'pointer' }}>
              Edit
            </button>
            
            <button onClick={() => handleDelete(todo.id)} style={{ cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
