import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import SidebarItem from "./SidebarItem.js";

import collections from "./assets/icons/collections/collections.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={
            "https://media-exp1.licdn.com/dms/image/D4D35AQHt3qjy_TYjfg/profile-framedphoto-shrink_200_200/0/1636344162160?e=1639458000&v=beta&t=NnKQ5kkcI0vqYE92H9XU9_s9j9hrA8Iqq15Mbx17T4Y"
          }
        />
        <p>{"Lernard Grigsby"}</p>
      </div>

      <SidebarItem img={collections.tasks} title={"New Task"} />
      <SidebarItem img={collections.habbits} title={"New Habbit"} />
      <SidebarItem img={collections.missions} title={"New Misson"} />
      <SidebarItem img={collections.challenges} title={"New Challenge"} />
    </div>
  );
}

export default Sidebar;
