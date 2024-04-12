import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop=(props)=>{
return(
<div className={classes.backdrop} onHide={props.onHide}></div>

)};
const Modaloverlay=props=>{
return(
<div className={classes.modal}>
  <div className={classes.content}>{props.children}</div>
</div>
)}
const Modal = (props) =>{
const helpElement= document.getElementById("overlays");
return(
<Fragment>
{ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>,helpElement)}
{ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,helpElement)}
</Fragment>
)}

export default Modal;