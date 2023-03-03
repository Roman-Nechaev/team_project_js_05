import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search');

searchFormRef.addEventListener('submit', onSearchForm);

const newsApiServis = new NewsApiServis();

export default function onSearchForm(e) {
  e.preventDefault();
  let { value } = e.target.searchQuery;
  console.log(value);
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
  const clickOneCards = document.querySelectorAll('[data-id]');

  const clickOne = clickOneCards.dataset.id;
  console.log(clickOne);

  const favouriteBtnRef = document.querySelector('.add-to-favBtn');
  favouriteBtnRef.addEventListener('click', evt => {
    const reservedId = params; // зарезервований ID
    console.log('object');
    // console.log(`Вибраний ID: ${selectedId}`);
    console.log(reservedId);
  });
}
