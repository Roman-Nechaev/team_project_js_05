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
