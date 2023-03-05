export const newsCardMarkup = ({
        id, 
        image_url,
        section, 
        abstract, 
        title, 
        published_date,
        url, 
      }) => {

      return `
              <div class="card-picture" data-id="${id}">
                  <img class="newsHomePage-image" src="${image_url}" alt="">
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
              <p class="newsHomePage-text">${abstract}</p>
              </div>
              <div class="homePage-readMore">
                  <span class="newsHomePage-date">${published_date}</span>
                  <a target="_blank" class="newsHomePage-readMore-link" href="${url}">Read more</a>
              </div>
    `;
};
