import React from "react";
import "./styles/app.scss";
import Task from "./components/Task";

function App() {
  const tasks = ["do laundry", "clean car", "learn html"];

  return (
    <div className="task-container">
      <input />
      <div className="taskList">
        {tasks.map((taskName) => (
          <Task name={taskName} />
        ))}
      </div>
    </div>
  );
}

export default App;
