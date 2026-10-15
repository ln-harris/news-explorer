import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewCardList.css";

function NewCardList({
  articles,
  savedArticles,
  onSaveArticle,
  isLoggedIn,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

  function handleShowMore() {
    setVisibleCards((currentAmount) => currentAmount + 3);
  }

  return (
    <section className="new-card-list">
      <h2 className="news-card-list__title">Search results</h2>

      <ul className="news-card-list__cards">
        {articles.slice(0, visibleCards).map((article) => (
          <li className="news-card-list__item" key={article.url}>
            <NewsCard
              article={article}
              isLoggedIn={isLoggedIn}
              isBookmarked={savedArticles.some(
                (savedArticle) => savedArticle.url === article.url,
              )}
              onSave={onSaveArticle}
            />
          </li>
        ))}
      </ul>

      {visibleCards < articles.length && (
        <button
          type="button"
          className="news-card-list__button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewCardList;
