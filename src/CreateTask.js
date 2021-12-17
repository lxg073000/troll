import React, { useState } from "react";
import ICONS from "./assets/icons/collections/collections";
import "./CreateTask.css";

function CreateTask() {
  const [priority, setPriority] = useState(0);
  return (
    <div
      className="createTask card"
      style={{ backgroundImage: `url(${ICONS.tasks})` }}
    >
      <form>
        <input className="title" placeholder="What's your next task?" />
        <input
          type="range"
          min="1"
          max="5"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          className="priority"
          id="myRange"
        />
        <input className="submit" type="submit" value="Create Task" />
      </form>
    </div>
  );
}

export default CreateTask;
