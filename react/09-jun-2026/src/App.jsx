import React from 'react';
import Task1Login from './components/Task1Login';
import Task2Calculator from './components/Task2Calculator';
import Task3Grades from './components/Task3Grades';
import Task4Bonus from './components/Task4Bonus';
import Task5Todo from './components/Task5Todo';
import Task6Users from './components/Task6Users';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Day 2 React Tasks</h1>
      <hr />
      <Task1Login />
      <Task2Calculator />
      <Task3Grades />
      <Task4Bonus />
      <Task5Todo />
      <Task6Users />
    </div>
  );
};

export default App;
