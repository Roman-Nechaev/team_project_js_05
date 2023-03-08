import { newsMarkup } from './markup';
import { getCategoriesFromApi } from './api-categories';
import { NewsApiCategories } from './api-categories';
const newsApiCategories = new NewsApiCategories();

export async function getCategories() {
  try {
    const result = await getCategoriesFromApi();
    const categories = result.data.results;
    // console.log(categories);
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
    const categoriesBtn = document.querySelector('.newsHP-categories');
    categoriesMobile.insertAdjacentHTML('beforeend', markupOthersDiv.join(''));

    const categoriesTable = document.querySelector('.categories-table-list');
    categoriesTable.innerHTML = markupOthersDiv.join('');
    // const categoriesDesktop = document.querySelector(
    //   '.categories-desktop-list'
    // );
    // categoriesDesktop.innerHTML = markupOthersDiv.join('');
    const othersBtn = document.querySelector('button.others');
    othersBtn.addEventListener('click', onClick);
    categoriesBtn.addEventListener('click', onCategoryOthers);

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
    const gallery = document.querySelector('.gallery');
    const categoriesMarkup = get.map(element => newsMarkup(element));
    gallery.innerHTML = categoriesMarkup.join('');
  });
}
function onCategoryOthers() {
  const category = document.querySelectorAll('.category');
  category.forEach(el => {
    el.addEventListener('click', onClick);
  });
}
