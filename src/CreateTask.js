import React, { useState } from "react";
import * as icons from "./assets/icons/exports";
import "./CreateTask.css";

function CreateTask() {
  const [priority, setPriority] = useState(0);
  const [title, setTitle] = useState("");
  const createTask = () => {};
  return (
    <div
      className="createTask card hm"
      style={{ backgroundImage: `url(${icons.task})` }}
    >
      <form>
        <input
          className="title"
          placeholder="What's your next task?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
        <input
          className="submit"
          type="submit"
          value="Create Task"
          onClick={createTask}
        />
      </form>
    </div>
  );
}

export default CreateTask;
