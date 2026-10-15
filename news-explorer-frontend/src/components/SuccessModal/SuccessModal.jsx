import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function SuccessModal({ onClose, onLoginClick }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      onClose={onClose}
      containerClassName="modal__container_type_success"
    >
      <button
        type="button"
        className="modal__success-link"
        onClick={onLoginClick}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SuccessModal;
