import React, { useState } from "react";
import db from "./firebase";
import * as icons from "./assets/icons/exports";
import "./CreateTask.css";
import { Checkbox, Slider, TextField } from "@mui/material";

function CreateTask() {
  const [priority, setPriority] = useState(1);
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const marks = [
    {
      value: 0,
      label: "None",
    },
    {
      value: 1,
      label: "Low",
    },
    {
      value: 2,
      label: "Medium",
    },
    {
      value: 3,
      label: "High",
    },
    {
      value: 4,
      label: "Highest",
    },
  ];
  const createTask = (e) => {
    e.preventDefault();

    const post = {
      title,
      priority,
      complete,
    };

    const postTask = async ({ title, priority }) => {
      try {
        db.collection("users/lernard/tasks").add({
          title,
          priority,
          complete,
        });
        resetForm();
      } catch (error) {
        console.log({ error });
      }
    };
    postTask(post);

    // console.log({ title, priority });
  };
  const resetForm = () => {
    setTitle("");
    setPriority(1);
    setComplete(false);
  };
  return (
    <div
      className="createTask card hm"
      // style={{ backgroundImage: `url(${icons.task})` }}
    >
      <form>
        <TextField
          label="What's your next task?"
          variant="filled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Slider
          aria-label="Always visible"
          defaultValue={priority}
          step={1}
          min={0}
          max={5}
          value={priority}
          onChange={(e, val) => setPriority(val)}
          valueLabelDisplay="on"
        />

        <Checkbox
          checked={complete}
          onChange={() => setComplete((prev) => !prev)}
        />
        {/* <input className="complete" type="checkbox" value={complete} /> */}
        <input
          className="submit"
          type="submit"
          value="Create Task"
          onClick={(e) => createTask(e)}
        />
      </form>
    </div>
  );
}

export default CreateTask;
