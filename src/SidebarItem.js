import React, { useRef } from "react";
import MyModal from "./MyModal";

import "./SidebarItem.css";

function SidebarItem({ img, title, Modal }) {
  const modalRef = useRef();
  const isOpen = () => {
    modalRef.current.isOpen();
  };
  return (
    <>
      <div className="sidebarItem" onClick={isOpen}>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <MyModal ref={modalRef}>{<Modal />}</MyModal>
    </>
  );
}

export default SidebarItem;
