import React, { useState } from 'react';

const Task3Grades = () => {
  const [name, setName] = useState('');
  const [mark, setMark] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = (e) => {
    e.preventDefault();
    const numMark = Number(mark);
    if (numMark >= 90) setGrade('A');
    else if (numMark >= 75) setGrade('B');
    else if (numMark >= 50) setGrade('C');
    else setGrade('Fail');
  };

  return (
    <div>
      <h2>Task 3: Student Grade System</h2>
      <form onSubmit={calculateGrade}>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Mark: </label>
          <input
            type="number"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Calculate Grade</button>
      </form>
      
      {grade && (
        <p>Result: {grade === 'Fail' ? 'Fail' : `Grade ${grade}`}</p>
      )}
      <hr />
    </div>
  );
};

export default Task3Grades;
