const axios = require('axios').default;

const KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';
const CATEGORIES =
  'https://api.nytimes.com/svc/news/v3/content/section-list.json';

export function getCategoriesFromApi() {
  const URL = `${CATEGORIES}?api-key=${KEY}`;
  return axios.get(URL);
}
export class NewsApiCategories {
  constructor() {
    this.searchCategories = '';
  }
  async getNews() {
    const SEARCH_CATEGORIES = `https://api.nytimes.com/svc/news/v3/content/inyt/${this.searchCategories}.json?api-key=${KEY}`;

    return await axios.get(SEARCH_CATEGORIES);
  }
}
