import { renderTemplateFavo } from './renderFavourite';
import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';
import { renderTemplateRead } from './renderReadMore';

// ==============
let incomingСardsHome;
export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;
}

let incomingСardsSearch;
export default function addFavourite(cardsSearch) {
  incomingСardsSearch = cardsSearch;
}

let incomingСardsCategori;
export function addCategori(cardsCategori) {
  incomingСardsCategori = cardsCategori;
}

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
  if (incomingСardsCategori) {
    incomingСardsCategori.map(news => {
      if (news.slug_name === cardsHomeId) {
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
  checkCardsLokal();
}

function checkCardsLokal(params) {
  const readStatus = document.querySelector('newsHomePage-status-read');
  const idHomeCards = incomingСardsHome.map(on => on.id);
  // console.log(idHomeCards);

  const idcardsRead = arrayOfCardsSelectedByReadMoreLink.map(one => one.id);
  // console.log(idcardsRead);
}
