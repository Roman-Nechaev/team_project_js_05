import { renderTemplateFavo } from './renderFavourite';

// ===================================
export default function addFavourite(newsDateResponse) {
  newsDateResponse.map(oneCards => {
    const { _id, news_desk, headline, lead_paragraph, pub_date, web_url } =
      oneCards;

    samplingById(oneCards);
  });
}

let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('testObject')) || [];

// логика добавления массива выбранных карточек
function samplingById(params) {
  const clickOneCards = document.querySelectorAll('.add-to-favBtn');

  clickOneCards.forEach(oneCards => {
    oneCards.addEventListener('click', e => {
      if (e.target.dataset.id === params._id) {
        arrayOfCardsSelectedById.push(params);
      }
      localStorage.setItem(
        'testObject',
        JSON.stringify(arrayOfCardsSelectedById)
      );
    });
  });
}

// renderTemplateFavo(arrayOfCardsSelectedById);

// ========================================
// function testFavorit(cardIdLocal, arrId) {
//   console.log(arrId);

//   const reservedId = cardIdLocal; // зарезервований ID

//   const arr = cardIdLocal; // масив ID
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

//
