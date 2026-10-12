const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://news-api-proxy.up.railway.app/news/v2/everything";
// const BASE_URL = "https://newsapi.org/v2/everything";

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Error: ${response.status}`);
}

function getNews(keyword) {
  const parameters = new URLSearchParams({
    q: keyword,
    apiKey: API_KEY,
  });

  return fetch(`${BASE_URL}?${parameters.toString()}`).then(checkResponse);
}

export { getNews };
