import dateFormat, { masks } from 'dateformat';
import iconsSvgAddRemove from '/assets/svg/symbol-defs.svg';

export function templateNewsReadMore(newsDateResp) {
  return newsDateResp
    .map(oneNewsItem => {
      const {
        _id,
        news_desk,
        headline,
        lead_paragraph,
        pub_date,
        web_url,
        id,
        image_url,
        section,
        abstract,
        title,
        published_date,
        url,
        thumbnail_standard,
      } = oneNewsItem;
      const idAll = _id || id;

      return `
    <div class="newsHomePage-card" data-id=${idAll}>
    <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="${image_url || thumbnail_standard || checkUrkImg(oneNewsItem)}"
          alt="news cover"
          width="288"
          height="395"
        />
        <p class="newsHomePage-status-read">Already read
                <svg class="marked-read" width="18" height="18">
                    <use href="${iconsSvgAddRemove}#icon-already-read"></use>
                </svg>
        <p class="newsHomePage-search-category">${news_desk || section}</p>

        <button class="remove-from-favourite" type="button" data-id=${idAll} >Remove from favourite
                    <svg class="remove-heart" width="16" height="16">
                        <use href="../assets/svg/symbol-defs.svg#icon-clicked_heart"></use>
                    </svg>
                </button>
      </div>
      <div>
        <h2 class="newsHomePage-title">
          ${title || headline.main}
        </h2>
        <p class="newsHomePage-text">
          ${formatingDerscription(abstract || lead_paragraph)}
        </p>
      </div>
      <div class="homePage-readMore">
        <p class="newsHomePage-date">${
          published_date || firmatDate(pub_date)
        }</p>
        <a class="newsHomePage-readMore-link" target = "_blank" href="${
          url || web_url
        }">Read more</a>
      </div>
    </div>
    </div>`;
    })
    .join('');
}

function checkUrkImg(item) {
  const urlImage = item.multimedia;

  if (!urlImage.length) {
    return 'https://placehold.co/400x400?text=NO+IMAGE';
  }

  return `https://static01.nyt.com/${item.multimedia[0].url}`;
}

function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}

function firmatDate(date) {
  const now = new Date(date);
  return dateFormat(now, 'dd/mm/yyyy');
}
