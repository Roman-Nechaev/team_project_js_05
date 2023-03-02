// import './js/allLogicSearch/index';

import NewsApiServis from './js/API/servise-news/servise-news-search';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');

searchFormRef.addEventListener('submit', onSearchForm);
const newsApiServis = new NewsApiServis();

function onSearchForm(e) {
  e.preventDefault();
  let { value } = e.target.search;
  value = value.trim();

  newsApiServis.query = value;
  requestToServer();
}

async function requestToServer() {
  try {
    const data = await newsApiServis.fetchNewsApi();
    const newsDateResponse = await data.response.docs;
    console.log(newsDateResponse);

    renderTemplate(newsDateResponse);
  } catch (error) {}
}

function renderTemplate(e) {
  galleryRef.insertAdjacentHTML('beforeend', galleryTemplateMarkup(e));
}

function clearGalleryInterface() {
  galleryRef.innerHTML = '';
}
