import "./NothingFound.css";
import notFoundIcon from "../../assets/not-found.svg";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img src={notFoundIcon} alt="Magnifying glass with a sad face" className="nothing-found__icon" />

      <h2 className="nothing-found__title">Nothing found</h2>

      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
