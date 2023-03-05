// // //отримайте доступ до локального сховища браузера, використовуючи localStorage API.
// // let savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
// // //отримуємо раніше збережені новини з localStorage та зберігаємо їх у змінну savedNews. Якщо немає збережених новин, створюємо порожній масив.

// // //створюємо HTML-код для галереї новин, який містить кожну новину зі списку savedNews.
// // const cardRef = document.getElementById('gallery');

// // savedNews.forEach(news => {
// //   let newsItem = document.createElement('div');
// //   newsItem.className = 'news-item';
// //   newsItem.innerHTML = `
// //     <h2>${news.title}</h2>
// //     <p>${news.description}</p>
// //     <button class="remove-btn">Remove from Favorites</button>
// //   `;
// //   cardRef.appendChild(newsItem);
// // });
// // //проходимося по кожній новині в savedNews, створюємо HTML-елемент для кожної новини та додаємо його до галереї.

// // //Додаємо обробник подій для кнопки "Remove from Favorites", який видаляє новину зі списку savedNews та з галереї.gallery.addEventListener('click', (e) => {

// // if (e.target.classList.contains('remove-btn')) {
// //   let newsItem = e.target.parentNode;
// //   let newsTitle = newsItem.querySelector('h2').textContent;
// //   savedNews = savedNews.filter(news => news.title !== newsTitle);
// //   localStorage.setItem('savedNews', JSON.stringify(savedNews));
// //   cardRef.removeChild(newsItem);
// // }
// //використовуємо делегування подій, щоб обробляти кліки на кнопці "Remove from Favorites", видаляємо HTML-елемент новини з галереї та видаляємо новину зі списку savedNews у localStorage.
// /////////////////////////////////////////////////////////////////////////////
// // Отримуємо список збережених новин з локального сховища браузера
// const savedNews = localStorage.getItem('savedNews');

// // Перевіряємо, чи є збережені новини
// if (savedNews) {
//   // Парсимо збережені новини з формату JSON
//   const newsList = JSON.parse(savedNews);

//   // Отримуємо елемент галереї на сторінці
//   const gallery = document.querySelector('.gallery');

//   // Проходимося по списку збережених новин та відображаємо їх на сторінці
//   newsList.forEach(news => {
//     // Створюємо елемент картки новини
//     const newsCard = document.createElement('div');
//     newsCard.classList.add('newsHomePage-card');

//     // Створюємо HTML-розмітку для картки новини
//     newsCard.innerHTML = `
//       <div class="card-picture">
//         <img class="newsHomePage-image" src="${news.imageUrl}" alt="news cover" />
//         <p class="newsHomePage-search-category">${news.category}</p>
//         <button class="remove-from-favBtn" type="button">
//           <span class="text-favBtn">Remove from favorite</span>
//           <svg class="heart" width="16" height="16">
//             <use href="/assets/svg/symbol-defs.svg#icon-clicked_heart"></use>
//           </svg>
//         </button>
//       </div>
//       <div>
//         <h2 class="newsHomePage-title">${news.title}</h2>
//         <p class="newsHomePage-text">${news.description}</p>
//       </div>
//       <div class="homePage-readMore">
//         <p class="newsHomePage-date">${news.date}</p>
//         <a class="newsHomePage-readMore-link" href="${news.url}">Read more</a>
//       </div>
//     `;

//     // Додаємо картку новини до галереї на сторінці
//     gallery.appendChild(newsCard);

//     // Знаходимо кнопку "RemoveFromFavorite"
//     const removeFromFavBtn = document.querySelector('.add-to-favBtn');

//     // Додаємо обробник події на кнопку "RemoveFromFavorite"
//     removeFromFavBtn.addEventListener('click', removeFromFav);

//     // Функція для видалення новини зі списку збережених
//     function removeFromFav() {
//       // Знаходимо всі новини, які збережені в локальному сховищі
//       const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];

//       // Знаходимо ID новини, яку треба видалити
//       const newsId = this.parentNode.getAttribute('data-news-id');

//       // Видаляємо новину зі списку збережених
//       const updatedNews = savedNews.filter(news => news.id !== newsId);

//       // Зберігаємо оновлений список новин в локальному сховищі
//       localStorage.setItem('savedNews', JSON.stringify(updatedNews));

//       // Видаляємо картку з новиною зі сторінки
//       this.parentNode.parentNode.remove();
//     }
//   });
// }
