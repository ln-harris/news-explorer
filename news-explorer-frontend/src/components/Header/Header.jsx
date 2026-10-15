import Navigation from "../Navigation/Navigation.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import "./Header.css";

function Header({ onSearch, onLoginClick, isLoggedIn, currentUser, onLogout }) {
  return (
    <header className="header">
      <Navigation
        onLoginClick={onLoginClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />

      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>

      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
