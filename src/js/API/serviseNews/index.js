import { Notify } from 'notiflix/build/notiflix-notify-aio';
import dateFormat, { masks } from 'dateformat';

import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';
import InitPagination from '../../pagination/pagination'; //Pagination Simak

import addFavourite from '../../addFavourite/addFavourite';

import newDefaultMarkup from '../../defaultPage/defaultPageHome';


const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
let currentPage; //Pagination Simak
//---------------------------------------------------------------------------------------------------------
const formatDate = (someDate) => +someDate.split('/').join('')//форматуємо дату в суцільне число
const inputDate = document.querySelector('.calendar-input')//інпут календаря

inputDate.addEventListener('blur', onSelectedDate)//при втраті фокусу слухаємо дату
let isSelected = false;//перед рендером показує чи була вибрана дата
let dateNumber;//змінна в яку ми винесемо дату календаря

function onSelectedDate(e) {
  isSelected = true;
  dateNumber = formatDate(e.target.value)//відформатована дата календаря
  console.log(dateNumber)
}

function formatPublishedDate(date) {
  const now = new Date(date);
  return dateFormat(now, 'mm/dd/yyyy');
}

function filterResponce(dataToFilter, dateNumber) {
  const filterResult = dataToFilter.filter(item => {
    const itemDate = formatPublishedDate(item.pub_date)
    const correctDate = formatDate(itemDate)
    console.log(correctDate, dateNumber)
    return correctDate === dateNumber
  })

  return filterResult;//фукнція фільтр, викликаємо там де отримуємо дані
}

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
  requestToServer(newsApiServis.query);

}

async function requestToServer(valueQuery) {
  let arr = [];
  try {
    const data = await newsApiServis.fetchNewsApi();
    const newsDateResponse = await data.response.docs;
    let totalResult = newsDateResponse
    if (isSelected) {//якщо відбувся клік то фільтруємо
      console.log(totalResult)
      totalResult = filterResponce(newsDateResponse, dateNumber)
      console.log(newsDateResponse, dateNumber)
    }
    
    if (totalResult.length <= 0) {
      newDefaultMarkup();
      Notify.info(
        'Sorry, there are no news matching your search query. Please try again.'
      );
      return;
    }

    renderTemplate(totalResult);
    InitPagination.init(valueQuery, currentPage = 1); //Pagination Simak
    // const useID = totalResult.map(onId => arr.push(onId._id));
    addFavourite(totalResult);
  } catch (error) { }
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
