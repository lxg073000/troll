import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        db.collection("users/lernard/tasks").onSnapshot((snap) => {
          setTasks(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="tasks">
      {tasks &&
        tasks.map((task, id) => (
          <p className="task" key={id}>
            {task.title}
          </p>
        ))}
    </div>
  );
}

export default Tasks;
