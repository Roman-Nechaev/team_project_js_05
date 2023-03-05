import { templateFavouroteNews } from './templateFavouroteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

const savedNews = JSON.parse(localStorage.getItem('testObject')) || [];

export function renderTemplateFavo(savedNews) {
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavouroteNews(savedNews);
    deleteCardsForLocal();
  }
}

function deleteCardsForLocal() {
  const clickOneCards = document.querySelectorAll('.remove-from-favourite');

  const newsHomePageCardRef = document.querySelectorAll('.newsHomePage-card');

  //  idf.remove();
  clickOneCards.forEach(oneCards => {
    oneCards.addEventListener('click', e => {
      const newsId = e.target.dataset.id;

      const updatedNews = savedNews.filter(news => news._id !== newsId);

      localStorage.setItem('testObject', JSON.stringify(updatedNews));
      newsHomePageCardRef.forEach(idf => {
        if (idf.dataset.id === newsId) {
          idf.remove();
        }
      });
    });
  });
}
