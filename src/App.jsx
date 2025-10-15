import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";

function App() {
  return (
    <div>
      <h1>Task Guru</h1>
      <p>Our friendly task manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;
