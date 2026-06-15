import React, { useState } from "react";

export default function ExamResultSystem() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", marks: [80, 75, 90] },
    { id: 2, name: "Priya", marks: [60, 55, 70] }
  ]);

  // 1. Loop through all students to calculate Total and Average
  let studentsWithDetails = students.map((student) => {
    
    // Calculate total using reduce as requested
    let total = student.marks.reduce((sum, mark) => {
      return sum + mark;
    }, 0);

    // Calculate average
    let average = total / 3;

    // Check if pass or fail
    let status = "Fail";
    if (student.marks[0] >= 35 && student.marks[1] >= 35 && student.marks[2] >= 35) {
      status = "Pass";
    }

    // Return the updated student object
    return {
      id: student.id,
      name: student.name,
      marks: student.marks,
      total: total,
      average: average,
      status: status
    };
  });

  // 2. Find the highest total using Math.max
  // First, get all the totals using map
  let allTotals = studentsWithDetails.map((student) => {
    return student.total;
  });

  let highestTotal = Math.max(...allTotals);

  // 3. Find the topper
  let topper = null;
  for (let i = 0; i < studentsWithDetails.length; i++) {
    if (studentsWithDetails[i].total === highestTotal) {
      topper = studentsWithDetails[i];
    }
  }

  return (
    <div>
      <h2>Exam Result System</h2>

      <h3>Topper Details</h3>
      <p>Name: {topper.name}</p>
      <p>Total: {topper.total}</p>
      <p>Average: {topper.average}</p>
      <p>Status: {topper.status}</p>

      <h3>All Students</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Total</th>
            <th>Average</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentsWithDetails.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.marks[0]}, {student.marks[1]}, {student.marks[2]}</td>
                <td>{student.total}</td>
                <td>{student.average}</td>
                <td>{student.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
