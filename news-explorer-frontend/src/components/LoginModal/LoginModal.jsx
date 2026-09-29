import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState } from "react";

function LoginModal({ onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, password });
  }
  return (
    <ModalWithForm title="Sign in" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <label className="modal__label" htmlFor="login-email">
          Email
        </label>

        <input
          id="login-email"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label className="modal__label" htmlFor="login-password">
          Password
        </label>

        <input
          id="login-password"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit" className="modal__submit">
          Sign in
        </button>
        <p className="modal__switch">
          or{" "}
          <button type="button" className="modal__switch-button">
            Sign up
          </button>
        </p>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
