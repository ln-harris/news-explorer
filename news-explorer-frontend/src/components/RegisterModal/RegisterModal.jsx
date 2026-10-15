import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal({ onClose, onSubmit, onLoginClick, serverError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    isEmailValid && password.length > 6 && username.trim().length > 2;

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, password, username });
  }

  return (
    <ModalWithForm title="Sign up" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <label className="modal__label" htmlFor="register-email">
          Email
        </label>
        <input
          id="register-email"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {email && !isEmailValid && (
          <span className="modal__error">Invalid email address</span>
        )}

        <label className="modal__label" htmlFor="register-password">
          Password
        </label>
        <input
          id="register-password"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          minLength={7}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {password && password.length < 7 && (
          <span className="modal__error">
            Password must be at least 7 characters
          </span>
        )}

        <label className="modal__label" htmlFor="register-username">
          Username
        </label>
        <input
          id="register-username"
          className="modal__input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          minLength="3"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        {username && username.trim().length <= 2 && (
          <span className="modal__error">
            Username must be at least 3 characters
          </span>
        )}

        {serverError && (
          <span className="modal__server-error">{serverError}</span>
        )}

        <button type="submit" className="modal__submit" disabled={!isFormValid}>
          Sign up
        </button>
      </form>
      <p className="modal__switch">
        or{" "}
        <button
          type="button"
          className="modal__switch-button"
          onClick={onLoginClick}
        >
          Sign in
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
