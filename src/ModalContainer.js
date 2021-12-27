import React from "react";
import { createPortal } from "react-dom";
import "./ModalContainer.css";

function ModalContainer({ isOpen, setIsOpen, children }) {
  return isOpen === false
    ? null
    : createPortal(
        <div className="modalContainer">{children}</div>,
        document.getElementById("dashboard-body")
      );
}

export default ModalContainer;
