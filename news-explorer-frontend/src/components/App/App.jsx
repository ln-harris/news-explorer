import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
  });

  const [savedArticles, setSavedArticles] = useState([]);

  function handleLogin() {
    setIsLoggedIn(true);
    setCurrentUser({ name: "Elise" });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({ name: "" });
  }

  function handleDeleteArticle(articleToDelete) {
    setSavedArticles((currentArticles) =>
      currentArticles.filter((article) => article.url !== articleToDelete.url),
    );
  }

  function handleSaveArticle(articleToSave) {
    setSavedArticles((currentArticles) => {
      const articleIsSaved = currentArticles.some(
        (article) => article.url === articleToSave.url,
      );

      if (articleIsSaved) {
        return currentArticles.filter(
          (article) => article.url !== articleToSave.url,
        );
      }

      return [...currentArticles, articleToSave];
    });
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              onLogin={handleLogin}
              onLogout={handleLogout}
              savedArticles={savedArticles}
              onSaveArticle={handleSaveArticle}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              onLogout={handleLogout}
              savedArticles={savedArticles}
              onDeleteArticle={handleDeleteArticle}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
