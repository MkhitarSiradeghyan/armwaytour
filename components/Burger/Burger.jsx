import React from "react";
import s from "./Burger.module.sass";

const Burger = ({ children }) => {
  return (
    <div className={s.burger}>
      <label htmlFor={s.burger}>
        <input type="checkbox" id={s.burger} />
        {children}
        <div className={`${s.line} ${s.top}`}></div>
        <div className={`${s.line} ${s.middle}`}></div>
        <div className={`${s.line} ${s.bottom}`}></div>
      </label>
    </div>
  );
};

export default Burger;
