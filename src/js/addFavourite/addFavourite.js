import { renderTemplateFavo } from './renderFavourite';
import { getMostPopularData } from '../allLogicSearch/loadPopularNews/loadPopularNews';
import { renderTemplateRead } from './renderReadMore';

import { chectPage } from '../defaultPage/defaultPageHome';

// ==============
let incomingСardsHome;
export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;

  chectPage(cardsHome);
}

let incomingСardsSearch;
export default function addFavourite(cardsSearch) {
  incomingСardsSearch = cardsSearch;

  chectPage(cardsSearch);
}
// chectPage(incomingСardsHome, incomingСardsSearch);
let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('FavouriteStorage')) || [];

let arrayOfCardsSelectedByReadMoreLink =
  JSON.parse(localStorage.getItem('readMore')) || [];

const galleryHomeRef = document.querySelector('.gallery');
if (galleryHomeRef) {
  galleryHomeRef.addEventListener('click', onClikGalleryHome);
}

// =========================HOME========================
function onClikGalleryHome(e) {
  const cardsHomeId = e.target.dataset.id;
  const cardsHomeReadLink = e.target.href;
  const btn = e.target.closest(`.add-to-favBtn`);

  // const btnFav = document.querySelector('.add-to-favBtn');
  // btn.classList.toggle('remove-from-favourite');
  if (btn) {
    const cardId = btn.dataset.id;
    console.log(cardId);
    // let foo = btn.classList.contains('remove-from-favourite');

    let favCard = incomingСardsHome.find(obj => +obj.id === +cardId);
    console.log(favCard);

    if (btn.classList.contains('add-to-favBtn')) {
      const updatedFavorites = arrayOfCardsSelectedById.filter(
        item => +item.id !== +cardId
      );
      // arrayOfCardsSelectedById.push(updatedFavorites);
      localStorage.setItem(
        'FavouriteStorage',
        JSON.stringify(updatedFavorites)
      );
      btn.classList.remove('add-to-favBtn');
    } else {
    }
    arrayOfCardsSelectedById.push(favCard);
    localStorage.setItem(
      'FavouriteStorage',
      JSON.stringify(arrayOfCardsSelectedById)
    );
    btn.classList.add('remove-from-favourite');
  }

  // const indexCards = incomingСardsHome.find(item => {
  //   +item.id === +cardsHomeId;
  // });

  // if (arrayOfCardsSelectedById.length > -1) {
  //   const findIndex = arrayOfCardsSelectedById.findIndex(news => {
  //     +news.id === +cardsHomeId;
  //   });

  //   arrayOfCardsSelectedById.push(indexCards);
  //   localStorage.setItem(
  //     'FavouriteStorage',
  //     JSON.stringify(arrayOfCardsSelectedById)
  //   );
  //   let indexLocal = arrayOfCardsSelectedById;

  //   // const indexLocalFilter = indexLocal.filter(item => {
  //   //   +item.id !== +cardsHomeId;
  //   // });
  //   // arrayOfCardsSelectedById.push(indexLocalFilter);
  //   localStorage.setItem(
  //     'FavouriteStorage',
  //     JSON.stringify(arrayOfCardsSelectedById)
  //   );
  // } else if (findIndex > 0) {
  //   let indexLocal = arrayOfCardsSelectedById;

  //   const indexLocalFilter = arrayOfCardsSelectedById.filter(item => {
  //     item.id !== cardsHomeId;
  //   });

  //   console.log('indexLocalFilter :>> ', indexLocalFilter);

  //   localStorage.setItem('FavouriteStorage', JSON.stringify(indexLocalFilter));
  // }

  // const indexCards = incomingСardsHome.find(item => {
  //   item;
  // });

  //   if (news.id == cardsHomeId) {
  //     arrayOfCardsSelectedById.push(news);
  //     localStorage.setItem(
  //       'FavouriteStorage',
  //       JSON.stringify(arrayOfCardsSelectedById)
  //     );
  //   }
  //   if (news.url === cardsHomeReadLink) {
  //     arrayOfCardsSelectedByReadMoreLink.push(news);
  //     localStorage.setItem(
  //       'readMore',
  //       JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
  //     );
  //   }
  // });

  // =========================Search========================
  if (incomingСardsSearch) {
    incomingСardsSearch.forEach(news => {
      if (news._id === cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'FavouriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );
      }
      if (news.web_url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }
}
