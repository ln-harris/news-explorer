import { useState } from "react";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import NewCardList from "../NewCardList/NewCardList.jsx";
import Footer from "../Footer/Footer.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { getNews } from "../../utils/NewsApi.js";
import "./Main.css";

function Main() {
  const [articles, setArticles] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleSearch(keyword) {
    setIsLoading(true);
    setArticles([]);
    setSearchedKeyword(keyword);

    getNews(keyword)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error(error);
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLoginClick() {
    setIsLoginModalOpen(true);
  }

  function closeAllModals() {
    setIsLoginModalOpen(false);
  }

  function handleLoginSubmit({ email, password }) {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <>
      <Header onSearch={handleSearch} onLoginClick={handleLoginClick} />

      <main>
        {isLoading && <Preloader />}

        {!isLoading && articles.length > 0 && (
          <NewCardList key={searchedKeyword} articles={articles} />
        )}

        {!isLoading && searchedKeyword !== "" && articles.length === 0 && (
          <NothingFound />
        )}

        <About />
      </main>

      <Footer />

      {isLoginModalOpen && (
        <LoginModal onClose={closeAllModals} onSubmit={handleLoginSubmit} />
      )}
    </>
  );
}

export default Main;
