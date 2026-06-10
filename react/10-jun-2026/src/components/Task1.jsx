import React, { useState } from 'react';

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !department || !salary) return;
    
    const newEmployee = { name, department, salary };
    setEmployees([...employees, newEmployee]);
    
    // Clear form
    setName('');
    setDepartment('');
    setSalary('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>Task 1: Employee Registration</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input 
          type="text" 
          placeholder="Employee Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          type="text" 
          placeholder="Department" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          type="number" 
          placeholder="Salary" 
          value={salary} 
          onChange={(e) => setSalary(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Add Employee</button>
      </form>

      <h3>Employee List ({employees.length})</h3>
      <ul>
        {employees.map((emp, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {emp.name} - {emp.department} - ${emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;
