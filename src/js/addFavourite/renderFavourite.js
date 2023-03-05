import { templateFavouroteNews } from './templateFavouroteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

if (galleryFavouriteRef) {
  galleryFavouriteRef.addEventListener('click', onClikTest);
}

const savedNews = JSON.parse(localStorage.getItem('testObject')) || [];

renderTemplateFavo(savedNews);

const refCards = document.querySelectorAll('.newsHomePage-card');

function onClikTest(e) {
  const idCardsFov = e.target.dataset.id;
  let foo = localStorage.getItem('testObject');
  let cardsLocal = JSON.parse(foo);
  const filter = cardsLocal.filter(news => news._id !== idCardsFov);
  console.log(filter);
  localStorage.setItem('testObject', JSON.stringify(filter));

  refCards.forEach(idCards => {
    console.log(idCards);
    if (idCards.dataset.id === idCardsFov) {
      idCards.remove();
    }
  });
}

export function renderTemplateFavo(savedNews) {
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavouroteNews(savedNews);
  }
}
