import axios from 'axios';

const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';

export default class NewsApiServis {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchNewsApi() {
    const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
    const options = {
      params: {
        q: this.searchQuery,
        'api-key': API_KEY,
      },
    };

    const response = await axios.get(BASE_URL, options);

    const gatherData = await response.data;
    console.log(gatherData);
    return gatherData;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
