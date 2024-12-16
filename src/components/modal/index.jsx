import React from "react";
import "./style.scss";

const Modal = ({ isOpen, setIsOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Modal ichiga bosganda yopilmasligi uchun
            >
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
