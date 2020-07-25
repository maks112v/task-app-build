import React from "react";
import "./app.scss";
import { FaCheck } from "react-icons/fa";

function App() {
  const tasks = ["do laundry", "clean car", "learn html"];

  return (
    <div className="task-container">
      <input />
      <ul className="taskList">
        {tasks.map((taskName) => (
          <li className="task">{taskName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
