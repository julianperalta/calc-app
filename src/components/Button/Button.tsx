import React from "react";
import "./Button.css";

interface IButtonProps {
  type?: string;
  text: string;
  clickHandler: Function;
}

const Button: React.FC<IButtonProps> = ({text, type, clickHandler}) => (
  <button className = {type} onClick = {() => clickHandler(text)} onMouseDown = {(evt) => evt.preventDefault()}>
    <span>{text}</span>
  </button>
);

export default Button;