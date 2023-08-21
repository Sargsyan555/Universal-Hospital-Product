import {useState} from 'react';
import './Modal.scss'; // Import your CSS file for styling

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;