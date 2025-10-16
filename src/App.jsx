import { useEffect, useState } from "react";

import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <h1>Task Guru</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} />
      <Progresstracker />
      <button onClick={() => setTasks([])}>Clear all tasks</button>
    </div>
  )
}


