import React from "react";
import s from "./Modal.module.sass";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, toggleModal}) => {
  return (
    <div className={s.modal} onClick={toggleModal}>
      <div className={s.inner} onClick={e => e.stopPropagation()}>
        <div className={s.close} onClick={toggleModal}>
            <FaTimes/>
        </div>
        {children}
        </div>
    </div>
  );
};

export default Modal;
