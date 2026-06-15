import React, { useState } from "react";

export default function EmployeeAttendanceTracker() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi", checkIn: "09:00", checkOut: "18:00", status: "Present" }
  ]);

  // Form states kept separate
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [status, setStatus] = useState("Present");

  // Search state
  const [searchText, setSearchText] = useState("");

  const handleAddEmployee = () => {
    let newEmployee = {
      id: employees.length + 1,
      name: name,
      checkIn: checkIn,
      checkOut: checkOut,
      status: status
    };

    let newList = [...employees, newEmployee];
    setEmployees(newList);
  };

  // Filter Logic using filter(), toLowerCase(), includes()
  let filteredEmployees = employees.filter((employee) => {
    let empName = employee.name.toLowerCase();
    let search = searchText.toLowerCase();

    if (empName.includes(search)) {
      return true;
    } else {
      return false;
    }
  });

  // Count present employees using simple loop
  let presentCount = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].status === "Present") {
      presentCount = presentCount + 1;
    }
  }

  return (
    <div>
      <h2>Employee Attendance Tracker</h2>

      <h3>Add Employee</h3>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br /><br />

      <label>Check In:</label>
      <input type="time" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      <br /><br />

      <label>Check Out:</label>
      <input type="time" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      <br /><br />

      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <br /><br />

      <button onClick={handleAddEmployee}>Add</button>

      <h3>Total Present: {presentCount}</h3>

      <h3>Search Employee</h3>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      <h3>Employee List</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>{employee.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
