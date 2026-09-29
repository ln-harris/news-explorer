import "./ModalWithForm.css";
import closeIcon from "../../assets/close_btn.svg";
import { useEffect } from "react";

function ModalWithForm({ title, children, onClose }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeIcon} alt="" className="modal__close-icon" />
        </button>

        <h2 className="modal__title">{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
