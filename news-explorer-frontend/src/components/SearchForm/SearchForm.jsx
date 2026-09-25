import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search__content">
      <form className="search__form">
        <input
          type="search"
          name="keyword"
          aria-label="News topic"
          required
          className="search__input"
          placeholder="Enter topic"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
