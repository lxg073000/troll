import React from "react";
import "./SidebarItem.css";

function SidebarItem({ img, title }) {
  return (
    <div className="sidebarItem">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default SidebarItem;
