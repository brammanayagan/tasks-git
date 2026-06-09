import React, { useState } from 'react';

const Task4Bonus = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [result, setResult] = useState(null);

  const calculateBonus = (e) => {
    e.preventDefault();
    const numSalary = Number(salary);
    let bonus = 0;
    
    if (numSalary > 30000) {
      bonus = 5000;
    } else if (numSalary > 20000) {
      bonus = 3000;
    } else {
      bonus = 1000;
    }
    
    setResult({ bonus, finalSalary: numSalary + bonus });
  };

  return (
    <div>
      <h2>Task 4: Bonus Calculator</h2>
      <form onSubmit={calculateBonus}>
        <div>
          <label>Employee Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Salary: </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Calculate Bonus</button>
      </form>
      
      {result && (
        <div>
          <p>Bonus: {result.bonus}</p>
          <p>Final Salary: {result.finalSalary}</p>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Task4Bonus;
