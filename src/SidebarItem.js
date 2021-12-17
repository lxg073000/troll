import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import "./SidebarItem.css";

function SidebarItem({ img, title, Modal }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sidebarItem" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        {<Modal />}
      </ModalContainer>
    </>
  );
}

export default SidebarItem;
