import { newsMarkup } from './markup';
import { getCategoriesFromApi } from './api-categories';
import { NewsApiCategories } from './api-categories';


import { addCategori } from '../addFavourite/addFavourite';

import newDefaultMarkup from '../defaultPage/defaultPageHome';

const newsApiCategories = new NewsApiCategories();
const categoriesBtn = document.querySelector('.newsHP-categories');
categoriesBtn.addEventListener('click', onCategoryOthers);
const categoriesList = document.querySelector('.categories');
const othersBtn = document.querySelector('button.others');

export async function getCategories() {
  try {
    const result = await getCategoriesFromApi();
    const categories = result.data.results;

    let markupOthersDiv = [];
    let queryMobile = window.matchMedia('(max-width: 767px)');
    let queryTableMin = window.matchMedia('(min-width: 768px)');
    let queryTableMax = window.matchMedia('(max-width: 1279px)');

    categories.forEach((category, index) => {
      if (queryMobile.matches) {
        markupOthersDiv.push(createMarkupUl(category));
      } else if (queryTableMin.matches && queryTableMax.matches) {
        if (index >= 4) {
          markupOthersDiv.push(createMarkupUl(category));
        }
      } else {
        if (index >= 6) {
          markupOthersDiv.push(createMarkupUl(category));
        }
      }
    });
    const categoriesMobile = document.querySelector('.categories-list');
    categoriesMobile.insertAdjacentHTML('beforeend', markupOthersDiv.join(''));
    categoriesList.addEventListener('click', showMenu);
    const categoriesClose = document.querySelector('body');
    othersBtn.addEventListener('click', showMenu);
    const category = document.querySelectorAll('.category');
    category.forEach(el => {
      el.addEventListener('click', onClick);
    });
  } catch (error) {
    console.log(error);
  }
}
getCategories();
function createMarkupUl({ display_name }) {
  return `
  <li class="category"><span>${display_name}</span></li>
    `;
}
function onClick(e) {
  e.preventDefault();
  const category = e.target.textContent.toLowerCase();
  newsApiCategories.searchCategories = category;
  const categoriesMarkup = newsApiCategories.getNews().then(json => {
    const get = json.data.results;
    if( get == null) {
      newDefaultMarkup();
      document.getElementById('pagination-container').style.display = 'none';
      return;
    }

    const gallery = document.querySelector('.gallery');
    const categoriesMarkup = get.map(element => newsMarkup(element));
    gallery.innerHTML = categoriesMarkup.join('');
    addCategori(get);
  });
}
function onCategoryOthers() {
  showMenu();
  const category = document.querySelectorAll('.category');
  category.forEach(el => {
    el.addEventListener('click', onClick);
  });
}
function showMenu() {
  const iconMobile = document.querySelector('.categ-arrow-down');
  const iconOthers = document.querySelector('.others-arrow-down');
  categoriesList.classList.toggle('show');
  categoriesList.classList.toggle('hidden');
  iconMobile.classList.toggle('switchedImg');
  iconOthers.classList.toggle('switchedImg');
  categoriesBtn.classList.toggle('categoriesBtnOpened');
  othersBtn.classList.toggle('othersBtnOpened');
}
