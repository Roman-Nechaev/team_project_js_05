//Спочатку, отримайте доступ до локального сховища браузера, використовуючи localStorage API.
let savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
//У цьому прикладі ми отримуємо раніше збережені новини з localStorage та зберігаємо їх у змінну savedNews. Якщо немає збережених новин, ми створюємо порожній масив.

//Далі, створюємо HTML-код для галереї новин, який містить кожну новину зі списку savedNews.
let gallery = document.getElementById('gallery');

savedNews.forEach(news => {
  let newsItem = document.createElement('div');
  newsItem.className = 'news-item';
  newsItem.innerHTML = `
    <h2>${news.title}</h2>
    <p>${news.description}</p>
    <button class="remove-btn">Remove from Favorites</button>
  `;
  gallery.appendChild(newsItem);
});
//У цьому коді ми проходимося по кожній новині в savedNews, створюємо HTML-елемент для кожної новини та додаємо його до галереї.

//Додаємо обробник подій для кнопки "Remove from Favorites", який видаляє новину зі списку savedNews та з галереї.gallery.addEventListener('click', (e) => {

if (e.target.classList.contains('remove-btn')) {
  let newsItem = e.target.parentNode;
  let newsTitle = newsItem.querySelector('h2').textContent;
  savedNews = savedNews.filter(news => news.title !== newsTitle);
  localStorage.setItem('savedNews', JSON.stringify(savedNews));
  gallery.removeChild(newsItem);
}
//У цьому коді ми використовуємо делегування подій, щоб обробляти кліки на кнопці "Remove from Favorites" відповідно. Ми видаляємо HTML-елемент новини з галереї та видаляємо новину зі списку savedNews у localStorage.

//Отже, зіставивши всі етапи, ми можемо зробити так, щоб галерея новин була оновлена зі списком новин, збережених у локальному сховищі, і з кнопками "Remove from Favorites", щоб користувач
