import { useState } from "react";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import NewCardList from "../NewCardList/NewCardList.jsx";
import Footer from "../Footer/Footer.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";
import { getNews } from "../../utils/NewsApi.js";
import "./Main.css";

function Main({ isLoggedIn, currentUser, onLogin, onLogout }) {
  const [articles, setArticles] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [registerError, setRegisterError] = useState("");

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
    setActiveModal("login");
  }

  function handleRegisterClick() {
    setActiveModal("register");
  }

  function closeAllModals() {
    setActiveModal(null);
  }

  function handleLoginSubmit({ email, password }) {
    console.log("Login:", { email, password });
    onLogin();
    closeAllModals();
  }

  function handleRegisterSubmit({ email, password, username }) {
    console.log("Registration:", { email, password, username });

    if (email.trim().toLowerCase() === "used@test.com") {
      setRegisterError("This email is not available");
      return;
    }

    setRegisterError("");
    setActiveModal("success");
  }

  return (
    <>
      <Header
        onSearch={handleSearch}
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />

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

      {activeModal === "login" && (
        <LoginModal
          onClose={closeAllModals}
          onSubmit={handleLoginSubmit}
          onRegisterClick={handleRegisterClick}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          onClose={closeAllModals}
          onSubmit={handleRegisterSubmit}
          onLoginClick={handleLoginClick}
          serverError={registerError}
        />
      )}
      {activeModal === "success" && (
        <SuccessModal
          onClose={closeAllModals}
          onLoginClick={handleLoginClick}
        />
      )}
    </>
  );
}

export default Main;
