import React from 'react'
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTasks from './Components/ListTasks/ListTasks'

function App() {
  return (
    <div className="App">
    <AddTask/>
    <ListTasks/>
    </div>
  );
}

export default App;
