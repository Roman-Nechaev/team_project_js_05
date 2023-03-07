import { templateNewsReadMore } from './templateReadMoreNews';

const galleryReadMoreRef = document.querySelector('.gallery-read');
const saveReadNews = JSON.parse(localStorage.getItem('readMore')) || [];

renderTemplateRead(saveReadNews);

export function renderTemplateRead(newsDateResp) {
  if (galleryReadMoreRef) {
    galleryReadMoreRef.innerHTML = templateNewsReadMore(newsDateResp);
  }
}
