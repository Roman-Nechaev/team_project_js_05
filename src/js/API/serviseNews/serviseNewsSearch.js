import axios from 'axios';

const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';

const formatDate = someDate => +someDate.split('/').reverse().join(''); //форматуємо дату в суцільне число
// const inputDate = document.querySelector('.calendar-input'); //інпут календаря

// inputDate.addEventListener('click', onSelectedDate); //при втраті фокусу слухаємо дату
let dateNumber; //змінна в яку ми винесемо дату календаря

function onSelectedDate(e) {
  dateNumber = formatDate(e.target.value); //відформатована дата календаря
  // console.log(dateNumber, 'onSelectedDate servise');
}

const begin = dateNumber || 20211231;
const end = dateNumber || 20230228;

export default class NewsApiServis {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchNewsApi() {
    const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
    const options = {
      params: {
        page: this.page,
        q: this.searchQuery,
        begin_date: begin,
        end_date: end, /// ЗАПРОС ПО ДАТЕ

        'api-key': API_KEY,
      },
    };

    const response = await axios.get(BASE_URL, options);
    const gatherData = await response.data;
    // console.log(gatherData);
    return gatherData;
  }

  incrementPage() {
    this.page += 1;
  }

  UsePage(go) {
    this.page = go;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
