import { renderTemplateFavo } from './renderFavourite';
import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';
import { renderTemplateRead } from './renderReadMore';

// import { chectPage } from '../defaultPage/defaultPageHome';

// ==============
let incomingСardsHome;
export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;

  // chectPage(cardsHome);
}

let incomingСardsSearch;
export default function addFavourite(cardsSearch) {
  incomingСardsSearch = cardsSearch;

  // chectPage(cardsSearch);
}
// chectPage(incomingСardsHome, incomingСardsSearch);
let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('favouriteStorage')) || [];

let arrayOfCardsSelectedByReadMoreLink =
  JSON.parse(localStorage.getItem('readMore')) || [];
const galleryHomeRef = document.querySelector('.gallery');
if (galleryHomeRef) {
  galleryHomeRef.addEventListener('click', onClikGalleryHome);
}

// =========================HOME========================
function onClikGalleryHome(e) {
  const cardsHomeId = e.target.dataset.id;
  const cardsHomeReadLink = e.target.href;

  const btn = e.target.closest(`.add-to-favBtn`);

  if (incomingСardsHome) {
    incomingСardsHome.forEach(news => {
      if (news.id == cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'favouriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );
        btn.classList.remove('add-to-favBtn');
        btn.classList.add('remove-from-favourite');
      }
      if (news.url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }

  // =========================Search========================
  if (incomingСardsSearch) {
    incomingСardsSearch.forEach(news => {
      if (news._id === cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'favouriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );
        btn.classList.remove('add-to-favBtn');
        btn.classList.add('remove-from-favourite');
      }
      if (news.web_url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }
}
