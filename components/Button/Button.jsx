import React from "react";
import s from "./Button.module.sass";

const Button = ({disabled = false, title = "", type = "info", onClick }) => {
  return <button disabled={disabled} onClick={onClick} type="submit" className={`${s.button} ${s[type]}`}>{title}</button>;
};

export default Button;
