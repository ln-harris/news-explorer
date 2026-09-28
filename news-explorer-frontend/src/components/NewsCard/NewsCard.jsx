import "./NewsCard.css";

function NewsCard({ article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <article className="news-card">
      <a
        className="news-card__link"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
        <div className="news-card__content">
          <time datetime={article.publishedAt} className="news-card__date">
            {formattedDate}
          </time>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </div>
      </a>
      <button
        type="button"
        className="news-card__bookmark"
        aria-label="Save article"
      />
    </article>
  );
}

export default NewsCard;
