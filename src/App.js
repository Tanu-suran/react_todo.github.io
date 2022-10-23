import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState } from "react";

function App() {
  const [tasksItems, setTaskitems] = useState([
    { name: "Mi primera tarea", done: false },
    { name: "Mi segunda tarea", done: false },
    { name: "Mi tercera tarea", done: false },
  ]);

  return (
    <div className="App">
      <TaskCreator />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
