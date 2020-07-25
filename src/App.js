import React from "react";

function App() {
  const tasks = ["do laundry", "clean car", "learn html"];

  return (
    <div>
      <input />
      <ul>
        {tasks.map((taskName) => (
          <li>{taskName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
