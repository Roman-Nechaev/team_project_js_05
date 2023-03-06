import { renderTemplateFavo } from './renderFavourite';
import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';

let incomingСardsHome;
export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;
}

let incomingСardsSearch;
export default function addFavourite(cardsSearch) {
  incomingСardsSearch = cardsSearch;
}

let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('testObject')) || [];

let arrayOfCardsSelectedByReadMoreLink =
  JSON.parse(localStorage.getItem('readMore')) || [];

const galleryHomeRef = document.querySelector('.gallery');
if (galleryHomeRef) {
  galleryHomeRef.addEventListener('click', onClikGalleryHome);
  // galleryHomeRef.addEventListener('click', onClikGallerySearch);
}

// =========================HOME========================
function onClikGalleryHome(e) {
  const cardsHomeId = e.target.dataset.id;
  const cardsHomeReadLink = e.target.href;

  if (incomingСardsHome) {
    incomingСardsHome.map(news => {
      if (news.id == cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'testObject',
          JSON.stringify(arrayOfCardsSelectedById)
        );
      }
      if (news.url == cardsHomeReadLink) {
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
    incomingСardsSearch.map(news => {
      if (news._id == cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'testObject',
          JSON.stringify(arrayOfCardsSelectedById)
        );
      }
      if (news.web_url == cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }
}
