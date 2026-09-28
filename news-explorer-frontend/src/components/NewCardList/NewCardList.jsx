import "./NewCardList.css";
import NewsCard from "../NewsCard/NewsCard.jsx";

function NewCardList({ articles }) {
  return (
    <section className="new-card-list">
      <h2 className="new-card-list__title">Search results</h2>
      <div className="news-card-list__cards">
        {articles.slice(0, 3).map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
}

export default NewCardList;
