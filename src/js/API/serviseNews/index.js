import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';
import InitPagination from '../../pagination/pagination'; //Pagination Simak

import addFavourite from '../../addFavourite/addFavourite';

import newDefaultMarkup from '../../defaultPage/defaultPageHome';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
let currentPage; //Pagination Simak

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
  clearGalleryInterface();
  newsApiServis.query = value;

  // onClickNext();
  requestToServer();
  InitPagination.init(value, (currentPage = 1)); //Pagination Simak
}



  // onClickNext();
  requestToServer(newsApiServis.query);




async function requestToServer(valueQuery) {
  let arr = [];
  try {
    const data = await newsApiServis.fetchNewsApi();
    const newsDateResponse = await data.response.docs;
    if (newsDateResponse.length <= 0) {
      newDefaultMarkup();
      Notify.info(
        'Sorry, there are no news matching your search query. Please try again.'
      );
      document.getElementById('pagination-container').style.display = 'none';
      return;
    }

    renderTemplate(newsDateResponse);
    InitPagination.init(valueQuery, (currentPage = 1)); //Pagination Simak
    document.getElementById('pagination-container').style.display = 'flex';
    // const useID = newsDateResponse.map(onId => arr.push(onId._id));
    document.getElementById('pagination-container').style.display = 'flex';
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
// function onClickNext() {
//   newsApiServis.incrementPage();
//   requestToServer();
// }
