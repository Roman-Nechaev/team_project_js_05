import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search');

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
  clearGalleryInterface();
  newsApiServis.query = value;
  requestToServer();
}

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

    const useID = newsDateResponse.map(onId => arr.push(onId._id));

    testFavorit(arr);
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

// ========================================
// function testFavorit(arrId) {
//   // console.log(arrId);

//   const reservedId = 'nyt://article/606a4ef1-13b8-5136-bc59-e8a5463ec075'; // зарезервований ID

//   const arr = arrId; // масив ID
//   let selectedId = null;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === reservedId) {
//       console.log(arr[i]);
//       selectedId = arr[i];
//       break;
//     }
//   }

//   console.log(`Вибраний ID: ${selectedId}`);
// }

const cardRef = document.querySelector('.gallery');

cardRef.addEventListener('click', onClickCard);

function onClickCard(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    console.log('УРАА КНОПКА!!');
    // console.log();
    const clickOneCards = document.querySelectorAll('.newsHomePage-card');

    for (const card of clickOneCards) {
      card.addEventListener('click', e => {
        const id = e.currentTarget;
        console.log(id);
        const testing = id.outerHTML;

        localStorage.setItem('savedNews', JSON.stringify(testing));
      });
    }
    return;
  } else {
    console.log('Click!!!!!!!!!!!');
    return;
  }
}

let foo = JSON.parse(localStorage.getItem('savedNews'));
