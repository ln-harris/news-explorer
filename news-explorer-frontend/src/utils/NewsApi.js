const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Error: ${response.status}`);
}

function getNews(keyword) {
  const parameters = new URLSearchParams({
    q: keyword,
  });

  return fetch(`${BASE_URL}?${parameters.toString()}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  }).then(checkResponse);
}

export { getNews };
