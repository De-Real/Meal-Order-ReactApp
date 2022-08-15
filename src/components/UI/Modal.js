import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {	
  return <div className={classes.modal}>
    <div className={classes.content}> {props.children}</div>
  </div>;
};

const Modal = (props) => {
	console.log(props.children)
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}></Backdrop>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
