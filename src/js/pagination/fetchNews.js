import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';

async function fetchNews(searchQuery, pageNum) {

  const searchParams = new URLSearchParams({
    'api-key': API_KEY,
    q: searchQuery,
    page: pageNum
  });

  return await axios.get(`${BASE_URL}${searchParams}`)
    .then(response => response.data);
  }

  export default { fetchNews };