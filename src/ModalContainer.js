import { ClickAwayListener, Portal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createPortal } from "react-dom";
import "./ModalContainer.css";

function ModalContainer({ isOpen, setIsOpen, children }) {
  return isOpen === false
    ? null
    : createPortal(
        <div className="modalContainer">{children}</div>,
        document.getElementById("app-body")
      );

  // return (
  //   <ClickAwayListener onClickAway={() => setIsOpen((prev) => !prev)}>
  //     <div>
  //       {isOpen ? (
  //         <Portal>
  //           <Box className="modalContainer">{children}</Box>
  //         </Portal>
  //       ) : null}
  //     </div>
  //   </ClickAwayListener>
  // );
}

export default ModalContainer;
