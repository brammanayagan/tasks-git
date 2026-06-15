import React from "react";
import "./App.css";

import ExamResultSystem from "./components/ExamResultSystem";
import EmployeeAttendanceTracker from "./components/EmployeeAttendanceTracker";
import MovieTicketBooking from "./components/MovieTicketBooking";
import DigitalClock from "./components/DigitalClock";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div>
      <h1>React Mini Dashboard</h1>
      <hr />
      <ExamResultSystem />
      <hr />
      <EmployeeAttendanceTracker />
      <hr />
      <MovieTicketBooking />
      <hr />
      <DigitalClock />
      <hr />
      <Stopwatch />
    </div>
  );
}

export default App;
