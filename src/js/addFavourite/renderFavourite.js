import { templateFavouroteNews } from './templateFavouroteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

if (galleryFavouriteRef) {
  galleryFavouriteRef.addEventListener('click', onClikDelCards);
}

const savedNews = JSON.parse(localStorage.getItem('favouriteStorage')) || [];

renderTemplateFavo(savedNews);

const refCards = document.querySelectorAll('.newsHomePage-card');

function onClikDelCards(e) {
  const idCardsFov = e.target.dataset.id;

  let localStorageGetKey = localStorage.getItem('favouriteStorage');
  let cardsLocalParse = JSON.parse(localStorageGetKey);
  let filter = [];
  cardsLocalParse.forEach(on => {
    const allid = on.id || on._id || on.slug_name;

    if (allid != idCardsFov) {
      filter.push(on);
    }
  });

  localStorage.setItem('favouriteStorage', JSON.stringify(filter));

  refCards.forEach(idCards => {
    if (idCards.dataset.id === idCardsFov) {
      idCards.remove();
    }
  });
}

export function renderTemplateFavo(newsDateResp) {
  // console.log(newsDateResp);
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavouroteNews(newsDateResp);
  }
}
