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
    console.log('Поле не должно быть пустым');
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
    console.log(newsDateResponse);

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

function testFavorit(arrId) {
  // console.log(arrId);

  const reservedId = 'nyt://article/606a4ef1-13b8-5136-bc59-e8a5463ec075'; // зарезервований ID

  const arr = arrId; // масив ID
  let selectedId = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === reservedId) {
      console.log(arr[i]);
      selectedId = arr[i];
      break;
    }
  }

  console.log(`Вибраний ID: ${selectedId}`);
}

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
console.log(foo);
