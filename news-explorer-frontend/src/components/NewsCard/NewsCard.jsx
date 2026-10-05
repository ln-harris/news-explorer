import "./NewsCard.css";
import trashIcon from "../../assets/trash-icon.svg";
import trashIconHover from "../../assets/trash-icon-hover.svg";
import bookmarkNormal from "../../assets/bookmark-normal.svg";
import bookmarkHover from "../../assets/bookmark-hover.svg";
import bookmarkMarked from "../../assets/bookmark-marked.svg";

function NewsCard({ article, isSaved, isBookmarked, onSave, onDelete }) {
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
      {isSaved && <span className="news-card__keyword">{article.keyword}</span>}
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
          <time dateTime={article.publishedAt} className="news-card__date">
            {formattedDate}
          </time>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </div>
      </a>
      {isSaved ? (
        <button
          type="button"
          className="news-card__delete-button"
          aria-label="Delete article"
          onClick={() => onDelete(article)}
        >
          <img
            src={trashIcon}
            alt=""
            className="news-card__button-icon news-card__button-icon_type_default"
          />

          <img
            src={trashIconHover}
            alt=""
            className="news-card__button-icon news-card__button-icon_type_hover"
          />
        </button>
      ) : (
        <button
          type="button"
          className="news-card__bookmark"
          aria-label="Save article"
          onClick={() => onSave(article)}
        >
          {isBookmarked ? (
            <img
              src={bookmarkMarked}
              alt=""
              className="news-card__button-icon"
            />
          ) : (
            <>
              <img
                src={bookmarkNormal}
                alt=""
                className="news-card__button-icon news-card__bookmark-icon_type_default"
              />

              <img
                src={bookmarkHover}
                alt=""
                className="news-card__button-icon news-card__bookmark-icon_type_hover"
              />
            </>
          )}
        </button>
      )}
    </article>
  );
}

export default NewsCard;
