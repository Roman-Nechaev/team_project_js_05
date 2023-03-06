
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';

import addFavourite from '../../addFavourite/addFavourite';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');

// ================= Pagination ===========
const prewBtn = document.querySelector('.prew-btn');
const nextBtn = document.querySelector('.next-btn');
// prewBtn.addEventListener('click', onClickPrew);
// nextBtn.addEventListener('click', onClickNext);
// ================= Pagination ===========

searchFormRef.addEventListener('submit', onSearchForm);

const newsApiServis = new NewsApiServis();

export default function onSearchForm(e) {
  e.preventDefault();
  let { value } = e.target.searchQuery;

  value = value.trim();
  if (!value) {
    Notify.warning('The search field should not be empty!');
    return;
  }

  value = value.trim();
  // console.log(value);
  clearGalleryInterface();
  newsApiServis.query = value;
  onClickNext();
  requestToServer();
}

// requestToServer();

async function requestToServer() {
  let arr = [];
  try {
    const data = await newsApiServis.fetchNewsApi();

    const newsDateResponse = await data.response.docs;

    if (newsDateResponse.length <= 0) {
      Notify.info(
        'Sorry, there are no news matching your search query. Please try again.'
      );
    }

    renderTemplate(newsDateResponse);

    // const useID = newsDateResponse.map(onId => arr.push(onId._id));
    addFavourite(newsDateResponse);
  } catch (error) {}
}

function renderTemplate(e) {
  galleryRef.innerHTML = templateMarkupNews(e);
}

function clearGalleryInterface() {
  galleryRef.innerHTML = '';
}

Notify.init({
  width: '300px',

  position: 'center-top',
  distance: '80px',

  warning: {
    background: 'rgba(68,64,247,0.7)',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    background: 'rgba(68,64,247,0.7)',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

// ================= Pagination ===========
function onClickNext() {
  newsApiServis.incrementPage();
  requestToServer();
}

