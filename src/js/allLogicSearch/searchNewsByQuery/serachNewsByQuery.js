// import { loadPopularData } from '/src/js/allLogicSearch/loadPopularNews/loadPopularNews';
// import { newsMarkup } from '/src/js/allLogicSearch/markupNews/markupNewsCards';

// loadPopularData().then(data => console.log(data));

// const searchForm = document.querySelector('#search-form');
// const btnSubmit = document.querySelector('.search-form__button');

// searchForm.addEventListener('input', controlBtnSumbit);
// searchForm.addEventListener('submit', onFormSubmit);

// btnSubmit.setAttribute('disabled', true);

// let query = '';
// let filteredNews;

// export function onFormSubmit(e) {
//   btnSubmit.setAttribute('disabled', true);
//   e.preventDefault();

//   if (!query && query.trim().length < 0) {
//     return;
//   }

//   query = query.trim().toLowerCase();

//   filteredNews = loadPopularData().then(data => {
//     return data.filter(oneNewsItem => {
//       const { section, title, abstract } = oneNewsItem;

//       return (
//         section.toLowerCase().includes(query) ||
//         title.toLowerCase().includes(query) ||
//         abstract.toLowerCase().includes(query)
//       );
//     });
//   }); //потім треба викликати маркап для перерендеру
//   // filteredNews.then(newsMarkup);
// }

// export function controlBtnSumbit(e) {
//   const query = e.target.value;
//   console.log(query);
//   if (query !== '') {
//     btnSubmit.removeAttribute('disabled');
//     return;
//   } else {
//     btnSubmit.setAttribute('disabled', true);
//     console.log('hey');
//   }
// }
