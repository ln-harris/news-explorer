import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewCardList.css";

function NewCardList({ articles, savedArticles, onSaveArticle }) {
  const [visibleCards, setVisibleCards] = useState(3);

  function handleShowMore() {
    setVisibleCards((currentAmount) => currentAmount + 3);
  }

  return (
    <section className="new-card-list">
      <h2 className="news-card-list__title">Search results</h2>

      <div className="news-card-list__cards">
        {articles.slice(0, visibleCards).map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isBookmarked={savedArticles.some(
              (savedArticle) => savedArticle.url === article.url,
            )}
            onSave={onSaveArticle}
          />
        ))}
      </div>

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
