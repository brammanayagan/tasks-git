import React from 'react';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>Task 4: Dark Mode Toggle</h2>
      <button 
        onClick={toggleDarkMode} 
        style={{ 
          padding: '10px 20px', 
          cursor: 'pointer',
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#000' : '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p style={{ marginTop: '10px' }}>Current Mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
    </div>
  );
}

export default DarkModeToggle;
