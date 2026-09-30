import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, currentUser, onLogout }) {
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
            {currentUser.name}, you have 5 saved articles
          </h1>

          <p className="saved-news__keywords">
            By keywords:{" "}
            <span className="saved-news__keywords-bold">
              Nature, Yellowstone, and 2 other
            </span>
          </p>
        </div>
      </header>

      <main className="saved-news__cards">
        {/* Saved cards will go here next */}
      </main>

      <Footer />
    </div>
  );
}

export default SavedNews;
