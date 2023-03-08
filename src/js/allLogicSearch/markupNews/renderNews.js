import { newsCardMarkup } from '../markupNews/markupNewsCards';
import { fetchPopularData } from '../loadPopularNews/loadPopularNews';
import { getMostPopularData } from '../loadPopularNews/loadPopularNews';

const root = document.querySelector('.gallery-home');

export function renderPopularNews() {
  fetchPopularData().then(data => {
    getMostPopularData(data).then(data => {
      if (root) {
        root.insertAdjacentHTML(
          'beforeend',
          data.map(item => newsCardMarkup(item)).join('')
        );
      }
    });
  });
}

renderPopularNews();
