import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import SidebarItem from "./SidebarItem.js";
import CreateTask from "./CreateTask";

import collections from "./assets/icons/collections/collections.js";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user.photoURL} />
        <p>{user.displayName}</p>
      </div>

      <SidebarItem
        img={collections.tasks}
        title={"New Task"}
        Modal={CreateTask}
      />
      <SidebarItem
        img={collections.habbits}
        title={"New Habbit"}
        Modal={CreateTask}
      />
      <SidebarItem
        img={collections.missions}
        title={"New Misson"}
        Modal={CreateTask}
      />
      <SidebarItem
        img={collections.challenges}
        title={"New Challenge"}
        Modal={CreateTask}
      />
    </div>
  );
}

export default Sidebar;
