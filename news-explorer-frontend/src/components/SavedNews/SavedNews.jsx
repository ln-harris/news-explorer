import "./SavedNews.css";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";

function SavedNews({
  isLoggedIn,
  currentUser,
  onLogout,
  savedArticles,
  onDeleteArticle,
}) {
  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword).filter(Boolean)),
  ];

  let keywordSummary = "";

  if (uniqueKeywords.length === 1) {
    keywordSummary = uniqueKeywords[0];
  } else if (uniqueKeywords.length === 2) {
    keywordSummary = uniqueKeywords.join(", ");
  } else if (uniqueKeywords.length > 2) {
    const remainingAmount = uniqueKeywords.length - 2;
    const otherWord = remainingAmount === 1 ? "other" : "others";

    keywordSummary = `${uniqueKeywords
      .slice(0, 2)
      .join(", ")}, and ${remainingAmount} ${otherWord}`;
  }

  return (
    <div className="saved-news">
      <header className="saved-news__header">
        <Navigation
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={onLogout}
          theme="light"
        />

        <div className="saved-news__summary">
          <p className="saved-news__label">Saved articles</p>

          <h1 className="saved-news__title">
            {currentUser.name}, you have {savedArticles.length} saved articles
          </h1>

          <p className="saved-news__keywords">
            By keywords:{" "}
            <span className="saved-news__keywords-bold">{keywordSummary}</span>
          </p>
        </div>
      </header>

      <main className="saved-news__cards">
        <div className="saved-news__card-list">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              isSaved
              onDelete={onDeleteArticle}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SavedNews;
