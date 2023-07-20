import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Task } from '.models/Task';
import taskInput from './components/task-input';
import taskTable from './components/task-table';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      loadTasksFromLocalStorage();
    }

  }, []);

  useEffect(() => {
    saveTasksTolocalStorage();
  }, [tasks]);

  function onTaskCreate(name) {
    const id  = new Date().getTime();
    const task = new Task(id, name, false);

    setTasks([...tasks, task]);
  }

  function onTaskRemove(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onTaskCompleted(taskId) {
    const taskToToggle = tasks.find((task) => task.id == taskId);
    taskToToggle.complete = !taskToToggle.complete;

    setTasks(
      tasks.map((task) => {
        return task.id == taskId ? taskToToggle : task;
      })
    );
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJson(x)));
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr />
        <p>Our Task List</p>

        <taskInput onTaskCreate = {onTaskCreate} />
        <taskTable
        tasks={tasks}
        onTaskRemove={onTaskRemove}
        onTaskCompleted={onTaskCompleted}
        />
      </div>
    </div>
  )
}

export default App;