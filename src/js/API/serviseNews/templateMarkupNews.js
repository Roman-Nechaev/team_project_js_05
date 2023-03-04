export function templateMarkupNews(newsDateResp) {
  // const { abstract, lead_paragraph, web_url } = evt;

  return newsDateResp
    .map(oneNewsItem => {
      const { _id, news_desk, headline, lead_paragraph, pub_date, web_url } =
        oneNewsItem;
      return `
    <div class="newsHomePage-card" data-id='${_id}'>
    <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="https://static01.nyt.com/${oneNewsItem.multimedia[0].url}"
          alt="news cover"
          width="288"
          height="395"
        />
        <p class="newsHomePage-status-read">Already read</p>
        <p class="newsHomePage-search-category">${news_desk}</p>
        <button class="add-to-favBtn" type="button">
          Add to favourite
          <svg class="heart" width="16" height="16">
            <use href="/assets/svg/symbol-defs.svg#icon-unclicked_heart"></use>
          </svg>
        </button>
      </div>
      <div>
        <h2 class="newsHomePage-title">
          ${headline.main}
        </h2>
        <p class="newsHomePage-text">
          ${formatingDerscription(lead_paragraph)}
        </p>
      </div>
      <div class="homePage-readMore">
        <p class="newsHomePage-date">${pub_date}</p>
        <a class="newsHomePage-readMore-link" href="${web_url}">Read more</a>
      </div>
    </div>
    </div>`;
    })
    .join('');
}

function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}
// pub_date - дата публикации
