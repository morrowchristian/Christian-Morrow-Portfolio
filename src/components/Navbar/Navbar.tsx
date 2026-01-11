// src/components/Modal/Modal.tsx
import React from "react";
import "./Modal.css";
import { ContactForm } from "../ContactForm/ContactForm";

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal__overlay" onClick={handleBackgroundClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
};
