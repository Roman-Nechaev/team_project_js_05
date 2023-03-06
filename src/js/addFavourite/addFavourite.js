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

// ===============СТАРАЯ ВЕРСИЯ ЧЕРЕЗ КНОПКУ=========
// export default function addFavourite(newsDateResponse) {
//   newsDateResponse.map(oneCards => {
//     samplingById(oneCards);
//   });
// }

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
      console.log(news);
      console.log('HOME');
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

// =================Search OLD BTN=================

// function samplingById(params) {
//   const clickOneCards = document.querySelectorAll('.test-favBtn');

//   clickOneCards.forEach(oneCards => {
//     oneCards.addEventListener('click', e => {
//       if (e.target.dataset.id === params._id) {
//         arrayOfCardsSelectedById.push(params);
//       }
//       localStorage.setItem(
//         'testObject',
//         JSON.stringify(arrayOfCardsSelectedById)
//       );
//     });
//   });
// }

// =====================
