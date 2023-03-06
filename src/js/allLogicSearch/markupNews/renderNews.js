import { newsCardMarkup } from '../markupNews/markupNewsCards';
import { fetchPopularData } from '../loadPopularNews/loadPopularNews';
import { getMostPopularData } from '../loadPopularNews/loadPopularNews';

const root = document.querySelector('.gallery');

export function renderPopularNews() {
  fetchPopularData().then(data => {
    getMostPopularData(data).then(data => {
      if (root) {
        root.innerHTML = data.map(item => newsCardMarkup(item)).join('');
      }
    });
  });
}

renderPopularNews();
