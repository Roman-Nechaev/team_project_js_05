// import { renderTemplateFavo } from './renderFavourite';
// import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';
// import { renderTemplateRead } from './renderReadMore';

// import { chectPage } from '../defaultPage/defaultPageHome';

// // ==============
// let incomingСardsHome;
// export function comeCardsHome(cardsHome) {
//   incomingСardsHome = cardsHome;

//   chectPage(cardsHome);
// }

// let incomingСardsSearch;
// export default function addFavourite(cardsSearch) {
//   incomingСardsSearch = cardsSearch;

//   chectPage(cardsSearch);
// }

// let arrayOfCardsSelectedById =
//   JSON.parse(localStorage.getItem('favouriteStorage')) || [];

// let arrayOfCardsSelectedByReadMoreLink =
//   JSON.parse(localStorage.getItem('readMore')) || [];

// const galleryHomeRef = document.querySelector('.gallery');
// if (galleryHomeRef) {
//   galleryHomeRef.addEventListener('click', onClikGalleryHome);
// }

// // =========================HOME========================
// function onClikGalleryHome(e) {
//   const cardsHomeId = e.target.dataset.id;
//   const cardsHomeReadLink = e.target.href;

//   const btn = e.target.closest(`.add-to-favBtn`);

//   if (incomingСardsHome && btn) {
//     // const cardId = btn.dataset.id;

//     let favCard = incomingСardsHome.find(item => +item.id === +cardsHomeId);

//     if (btn.classList.contains('add-to-favBtn')) {
//       const updatedFavorites = arrayOfCardsSelectedById.filter(
//         item => +item.id !== +cardsHomeId
//       );

//       localStorage.setItem(
//         'favouriteStorage',
//         JSON.stringify(updatedFavorites)
//       );
//       btn.classList.remove('add-to-favBtn');
//     }
//     arrayOfCardsSelectedById.push(favCard);
//     localStorage.setItem(
//       'favouriteStorage',
//       JSON.stringify(arrayOfCardsSelectedById)
//     );
//     btn.classList.add('remove-from-favourite');
//   }

//   // =======================LINK HOME=====

//   if (cardsHomeReadLink) {
//     let cardsLink = incomingСardsHome.find(
//       item => item.url === cardsHomeReadLink
//     );

//     arrayOfCardsSelectedByReadMoreLink.push(cardsLink);
//     localStorage.setItem(
//       'readMore',
//       JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
//     );
//   }
//   // =========================Search========================

//   // if (incomingСardsSearch) {
//   //   incomingСardsSearch.forEach(news => {
//   //     if (news._id === cardsHomeId) {
//   //       arrayOfCardsSelectedById.push(news);
//   //       localStorage.setItem(
//   //         'favouriteStorage',
//   //         JSON.stringify(arrayOfCardsSelectedById)
//   //       );
//   //     }
//   //     if (news.web_url === cardsHomeReadLink) {
//   //       arrayOfCardsSelectedByReadMoreLink.push(news);
//   //       localStorage.setItem(
//   //         'readMore',
//   //         JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
//   //       );
//   //     }
//   //   });
//   // }
// }
