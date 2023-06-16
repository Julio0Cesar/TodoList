import React from "react";

import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal?.classList.add(styles.hide);
  };

  return (
    <div id="modal" className={styles.hide} >
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Modal;