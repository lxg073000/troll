import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import SidebarItem from "./SidebarItem.js";

import Note from "./assets/icons/note.png";
import Rocket from "./assets/icons/rocket.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <p>{"Freddy"}</p>
      </div>

      <SidebarItem img={Note} title={"New Task"} />
      <SidebarItem img={Rocket} title={"New Misson"} />
    </div>
  );
}

export default Sidebar;
