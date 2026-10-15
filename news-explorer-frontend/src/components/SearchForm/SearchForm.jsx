import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      return;
    }

    onSearch(trimmedKeyword);
  }

  return (
    <div className="search__content">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="keyword"
          aria-label="News topic"
          required
          className="search__input"
          placeholder="Enter topic"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
