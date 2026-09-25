import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        NewsExplorer
      </Link>

      <ul className="nav__links">
        <li className="nav__item">
          <Link to="/" className="nav__home">
            Home
          </Link>
        </li>

        <li className="nav__item">
          <button type="button" className="nav__button">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
