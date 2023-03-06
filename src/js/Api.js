const axios = require('axios').default;

const KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';
const EDPOINT = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

export function getCategoriesFromApi() {
  const URL = `${EDPOINT}?api-key=${KEY}`;
  return axios.get(URL);
}
