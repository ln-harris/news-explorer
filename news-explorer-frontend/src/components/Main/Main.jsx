import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import NewCardList from "../NewCardList/NewCardList.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Main.css";
import { getNews } from "../../utils/NewsApi.js";
import { useState } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [searchError, setSearchError] = useState("");

  function handleSearch(keyword) {
    setSearchError("");
    setSearchedKeyword(keyword);
    getNews(keyword)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        setArticles([]);
        setSearchError(error);
      });
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <main>
        {articles.length > 0 && <NewCardList articles={articles} />}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Main;
