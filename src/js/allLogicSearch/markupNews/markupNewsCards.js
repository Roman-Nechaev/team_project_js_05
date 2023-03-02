export const newsMarkup = newsData => {

  let isRead = false;
  let isFavorite = false;

  return newsData.map(oneNewItem => {
    const {
      id, //data-id="${id}"
      media,
      section, //category
      abstract, //description
      title, //title
      published_date,
      url, //Read more
    } = oneNewItem;

    //media це масив з обєктами
    const alt = media[0].caption; //-----те що піде в атрибут альт
    const img = media[0]['media-metadata'][2].url; //------ссилка на картинку
    return (`
    <li data-id="${id}">
              <div class="card-picture" >
                  <img class="newsHomePage-image" src="${img}" alt="${alt}">
                  <p class="newsHomePage-search-category">${section}</p>
                  <span class="newsHomePage-status-read">
                  Already read 
                      <svg class="heart" width="16" height="16">
                        <use href="/assets/svg/symbol-defs.svg#icon-unclicked_heart"></use>
                      </svg>
                  </span>
                  <button type="button" class="add-to-favBtn">
                    Add to favorite
                  </button>
              </div>
              <div class="new__text-wrapper">
              <h2 class="newsHomePage-title">${title}</h2>
              <p class="newsHomePage-text">${formatingDerscription(abstract)}</p>
              </div>
              <div class="homePage-readMore">
                  <span class="newsHomePage-date">${published_date}</span>
                  <a target="_blank" class="newsHomePage-readMore-link" href="${url}">Read more</a>
              </div>
    </li>
    `)
  }).join('')
  
};


export function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}