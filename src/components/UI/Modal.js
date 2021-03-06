import  ReactDOM  from "react-dom";

import classes from './Modal.module.css'
import { Fragment } from "react";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalOverlay = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalOverlay)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlay
      )}
    </Fragment>
  );
};

export default Modal;
