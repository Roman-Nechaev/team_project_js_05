import { templateNewsReadMore } from './templateReadMoreNews';

const galleryReadMoreRef = document.querySelector('.gallery-read');

const saveReadNews = JSON.parse(localStorage.getItem('readMore')) || [];
console.log('saveReadNews :>> ', saveReadNews);
console.log(saveReadNews);
if (galleryReadMoreRef) {
  // galleryReadMoreRef.addEventListener('click', onClikTest);
}

renderTemplateRead(saveReadNews);

export function renderTemplateRead(newsDateResp) {
  console.log(newsDateResp);
  if (galleryReadMoreRef) {
    galleryReadMoreRef.innerHTML = templateNewsReadMore(newsDateResp);
  }
}
