import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem.js";
import CreateTask from "./CreateTask";

import { collections } from "./assets/icons/collections/collections.js";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="top">
          <p>Hey, {user.displayName.split(" ")[0]}</p>
        </div>
        <p className="cta">Let's tackle some tasks!</p>
      </div>
      <div className="sidebar__content">
        <SidebarItem
          img={collections.tasks}
          title={"Task"}
          Modal={CreateTask}
        />
        <SidebarItem
          img={collections.habbits}
          title={"Habbit"}
          Modal={CreateTask}
        />
        <SidebarItem
          img={collections.missions}
          title={"Misson"}
          Modal={CreateTask}
        />
        <SidebarItem
          img={collections.challenges}
          title={"Challenge"}
          Modal={CreateTask}
        />
      </div>
    </div>
  );
}

export default Sidebar;
