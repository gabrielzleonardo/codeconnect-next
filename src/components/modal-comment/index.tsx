"use client";

import { MessageSquareText } from "lucide-react";
import IconButton from "../icon-button";
import Modal, { ModalHandlers } from "../modal";
import { useRef } from "react";

const ModalComment = () => {
  const modalRef = useRef<ModalHandlers>(null);
  return (
    <>
      <Modal ref={modalRef}>
        <h1>Olá, modal!</h1>
      </Modal>
      <IconButton onClick={() => modalRef.current?.openModal()}>
        <MessageSquareText />
      </IconButton>
    </>
  );
};

export default ModalComment;
