"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

export interface ModalHandlers {
  openModal: () => void;
  closeModal: () => void;
}

interface Modal {
  children: React.ReactNode;
}
const Modal = forwardRef<ModalHandlers, Modal>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <dialog
      ref={dialogRef}
      className=" backdrop:bg-gray-400 backdrop:opacity-80"
    >
      <header>
        <button onClick={closeModal}>X</button>
      </header>

      {children}
    </dialog>
  );
});

Modal.displayName = "Modal";

export default Modal;
