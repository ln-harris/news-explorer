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
  return (
    <nav className={`nav ${theme === "light" ? "nav_theme_light" : ""}`}>
      <Link to="/" className="nav__logo">
        NewsExplorer
      </Link>

      <ul className={`nav__links ${isLoggedIn ? "nav__links_logged-in" : ""}`}>
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link_active" : ""}`
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
                  `nav__link ${isActive ? "nav__link_active" : ""}`
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
                    src={theme === "light" ? logoutBlackIcon : logoutIcon}
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
              onClick={onLoginClick}
            >
              Sign in
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
