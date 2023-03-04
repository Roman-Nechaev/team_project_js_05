import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');

searchFormRef.addEventListener('submit', onSearchForm);

const newsApiServis = new NewsApiServis();

export default function onSearchForm(e) {
  e.preventDefault();
  let { value } = e.target.search;
  value = value.trim();
  clearGalleryInterface();
  newsApiServis.query = value;
  requestToServer();
}

async function requestToServer() {
  try {
    const data = await newsApiServis.fetchNewsApi();
    const newsDateResponse = await data.response.docs;
    console.log(newsDateResponse);

    renderTemplate(newsDateResponse);

    const useID = newsDateResponse.map(onId => testFavorit(onId._id));
  } catch (error) {}
}

function renderTemplate(e) {
  galleryRef.innerHTML = templateMarkupNews(e);
}

function clearGalleryInterface() {
  galleryRef.innerHTML = '';
}

function testFavorit(params) {
  const clickOneCards = document.querySelector('[data-id]');
  console.log(clickOneCards.dataset.id);

  const favouriteBtnRef = document.querySelector('.add-to-favBtn');
  favouriteBtnRef.addEventListener('click', evt => {
    const reservedId = params; // зарезервований ID

    // console.log(`Вибраний ID: ${selectedId}`);
    console.log(reservedId);
  });
}
