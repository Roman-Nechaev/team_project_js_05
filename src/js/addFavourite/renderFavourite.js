import { templateFavouroteNews } from './templateFavouroteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

if (galleryFavouriteRef) {
  galleryFavouriteRef.addEventListener('click', onClikTest);
}

const savedNews = JSON.parse(localStorage.getItem('FavouriteStorage')) || [];

renderTemplateFavo(savedNews);

const refCards = document.querySelectorAll('.newsHomePage-card');

function onClikTest(e) {
  const idCardsFov = e.target.dataset.id;

  let localStorageGetKey = localStorage.getItem('FavouriteStorage');
  let cardsLocalParse = JSON.parse(localStorageGetKey);
  let filter = [];
  cardsLocalParse.forEach(on => {
    const allid = on.id || on._id;

    if (allid != idCardsFov) {
      filter.push(on);
    }
  });

  localStorage.setItem('FavouriteStorage', JSON.stringify(filter));

  refCards.forEach(idCards => {
    if (idCards.dataset.id === idCardsFov) {
      idCards.remove();
    }
  });
}

export function renderTemplateFavo(newsDateResp) {
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavouroteNews(newsDateResp);
  }
}
