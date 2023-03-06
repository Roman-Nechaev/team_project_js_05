import { renderTemplateFavo } from './renderFavourite';
import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';

export default function addFavourite(newsDateResponse) {
  newsDateResponse.map(oneCards => {
    samplingById(oneCards);
  });
}

let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('testObject')) || [];

let incomingСardsHome;
export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;
}

const galleryHomeRef = document.querySelector('.gallery');
if (galleryHomeRef) {
  galleryHomeRef.addEventListener('click', onClikGalleryHome);
}

function onClikGalleryHome(e) {
  const cardsHomeId = e.target.dataset.id;

  styleModificationAddBtn();
  incomingСardsHome.map(news => {
    if (news.id == cardsHomeId) {
      arrayOfCardsSelectedById.push(news);
      localStorage.setItem(
        'testObject',
        JSON.stringify(arrayOfCardsSelectedById)
      );
    }
  });
}

function samplingById(params) {
  const clickOneCards = document.querySelectorAll('.test-favBtn');

  clickOneCards.forEach(oneCards => {
    oneCards.addEventListener('click', e => {
      if (e.target.dataset.id === params._id) {
        arrayOfCardsSelectedById.push(params);
      }
      localStorage.setItem(
        'testObject',
        JSON.stringify(arrayOfCardsSelectedById)
      );
    });
  });
}

// =====================
