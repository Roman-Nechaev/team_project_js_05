import iconsSvgAdd from '/assets/svg/symbol-defs.svg';

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
              <div class="newsHomePage-card" data-id=${id}>
    <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="${image_url}"
          alt="news cover"
          width="288"
          height="395"
        />
        <p class="dispNo newsHomePage-status-read">Already read</p>
        <p class="newsHomePage-search-category">${section}</p>

        <button class="add-to-favBtn" type="button" data-id="${id}">Add to favourite
                <svg class="heart" width="16" height="16">
                    <use href="${iconsSvgAdd}#icon-unclicked_heart"></use>
                </svg>
            </button>
      </div>
      <div>
        <h2 class="newsHomePage-title">
          ${title}
        </h2>
        <p class="newsHomePage-text">
          ${abstract}
        </p>
      </div>
      <div class="homePage-readMore">
        <p class="newsHomePage-date">${published_date}</p>
        <a class="newsHomePage-readMore-link" target = "_blank" href="${url}">Read more</a>
      </div>
    </div>
    </div>

    `;
};
