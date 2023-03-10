import dateFormat, { masks } from 'dateformat';

export function templateMarkupNews(newsDateResp) {
  return newsDateResp
    .map(oneNewsItem => {
      const { _id, news_desk, headline, lead_paragraph, pub_date, web_url } =
        oneNewsItem;

      function checkUrkImg() {
        const urlImage = oneNewsItem.multimedia;

        if (!urlImage.length) {
          return 'https://placehold.co/400x400?text=NO+IMAGE';
        }

        return `https://static01.nyt.com/${oneNewsItem.multimedia[0].url}`;
      }

      return `
    <div class="newsHomePage-card" data-id=${_id}>
    <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="${checkUrkImg()}"
          alt="news cover"
          width="288"
          height="395"
        />
        <p class="dispNo newsHomePage-status-read">Already read</p>
        <p class="newsHomePage-search-category">${news_desk}</p>
        
        <button class="add-to-favBtn test-favBtn" type="button" data-id=${_id}>Add to favourite
                    <svg class="heart" width="16" height="16">
                        <use href="../assets/svg/symbol-defs.svg#icon-unclicked_heart">
                        </use>
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
        <p class="newsHomePage-date">${firmatDate(pub_date)}</p>
        <a class="newsHomePage-readMore-link" target = "_blank" href="${web_url}">Read more</a>
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

export function firmatDate(date) {
  const now = new Date(date);
  return dateFormat(now, 'dd/mm/yyyy');
}
