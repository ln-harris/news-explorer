import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import NewCardList from "../NewCardList/NewCardList.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Main.css";
import { getNews } from "../../utils/NewsApi.js";
import { useState } from "react";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import SearchError from "../SearchError/SearchError.jsx";

function Main() {
  const [articles, setArticles] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(keyword) {
    setIsLoading(true);
    setSearchError("");
    setArticles([]);
    setSearchedKeyword(keyword);
    getNews(keyword)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        setArticles([]);
        setSearchError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <main>
        {isLoading && <Preloader />}

        {!isLoading && articles.length > 0 && (
          <NewCardList key={searchedKeyword} articles={articles} />
        )}
        {!isLoading &&
          searchedKeyword !== "" &&
          !searchError &&
          articles.length === 0 && <NothingFound />}
        {!isLoading && searchError && <SearchError />}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Main;
