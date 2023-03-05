// ============================add
const cardRef = document.querySelector('.gallery');
const favoriteRef = document.querySelector('.gallery-favorite');

cardRef.addEventListener('click', onClickCard);

export default function onClickCard(evt) {
  let saveCards = {};

  const clickOneCards = document.querySelectorAll('.newsHomePage-card');

  clickOneCards.forEach(card => {
    card.addEventListener('click', e => {
      const id = e.currentTarget;

      const test = id;

      // saveCards.push(testing);
      console.log(test.outerHTML);

      localStorage.setItem('savedNews', JSON.stringify(test.outerHTML));
    });
  });
  let foo = JSON.parse(localStorage.getItem('savedNews'));

  console.log('getItem', foo);
  const tesfRend = foo;
  console.log('tesfRend :>> ', tesfRend);
  // cardRef.innerHTML = tesfRend;

  // if (evt.target.nodeName === 'BUTTON') {
  //   console.log('УРАА КНОПКА!!addFavourite');

  //   return;

  // } else {

  //   // console.log('Click!!!!!!!!!!!');
  //   return;

  // }
}

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

//
