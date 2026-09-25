import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__content">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <ul className="footer__links">
        <li>
          <Link to="/" className="footer__link">
            Home
          </Link>
        </li>
        <li>
          <a
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Tripleten
          </a>
        </li>
        <li>
          <div className="footer__socials">
            <a
              href="https://github.com/ln-harris"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="footer__github-icon"
              />
            </a>

            <a
              href="https://linkedin.com/in/lindseyharr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="footer__linkedin-icon"
              />{" "}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
