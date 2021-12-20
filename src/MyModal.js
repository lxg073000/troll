import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const MyModal = forwardRef(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      isOpen: () => setIsOpen((prev) => !prev),
    };
  });

  return !isOpen
    ? null
    : createPortal(
        <div className="modal">
          <div className="modal-box">{children}</div>
          <div
            className="modal-bg"
            onClick={() => setIsOpen((prev) => !prev)}
          ></div>
        </div>,
        document.getElementById("app-body")
      );
});

export default MyModal;
