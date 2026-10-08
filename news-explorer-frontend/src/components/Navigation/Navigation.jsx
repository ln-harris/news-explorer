import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import logoutBlackIcon from "../../assets/logout-black.svg";

function Navigation({
  onLoginClick,
  isLoggedIn,
  currentUser,
  onLogout,
  theme,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function handleSignInClick() {
    setIsMenuOpen(false);
    onLoginClick();
  }

  return (
    <nav className={`nav ${theme === "light" ? "nav_theme_light" : ""}`}>
      <Link to="/" className="nav__logo">
        NewsExplorer
      </Link>

      <button
        type="button"
        className="nav__menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
      >
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
      </button>

      <ul
        className={`nav__links ${
          isLoggedIn ? "nav__links_logged-in" : ""
        } ${isMenuOpen ? "nav__links_mobile-open" : ""}`}
      >
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav__link nav__link_type_home ${
                isActive ? "nav__link_active" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
            <li className="nav__item">
              <NavLink
                to="/saved-news"
                className={({ isActive }) =>
                  `nav__link nav__link_type_saved ${
                    isActive ? "nav__link_active" : ""
                  }`
                }
              >
                Saved articles
              </NavLink>
            </li>

            <li className="nav__item">
              <div className="nav__user">
                <span className="nav__username">{currentUser.name}</span>

                <button
                  type="button"
                  className="nav__logout"
                  onClick={onLogout}
                  aria-label="Log out"
                >
                  <img
                    src={
                      theme === "light" && !isMenuOpen
                        ? logoutBlackIcon
                        : logoutIcon
                    }
                    alt=""
                    className="nav__logout-icon"
                  />
                </button>
              </div>
            </li>
          </>
        ) : (
          <li className="nav__item">
            <button
              type="button"
              className="nav__button"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </li>
        )}
      </ul>
      {isMenuOpen && !isLoggedIn && (
        <div
          className="nav__overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navigation;
