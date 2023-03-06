const gallery = document.querySelector('.gallery');
import dateFormat, { masks } from 'dateformat';

function addListNews(newsDateResp) {
  const markup = newsDateResp
    .map(({ _id, news_desk, headline, lead_paragraph, pub_date, web_url, multimedia}) => {

      function checkUrkImg() {
        const urlImage = multimedia;

        if (!urlImage.length) {
          return 'https://placehold.co/400x400?text=NO+IMAGE';
        }

        return `https://static01.nyt.com/${multimedia[0].url}`;
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
        <p class="newsHomePage-status-read">Already read</p>
        <p class="newsHomePage-search-category">${news_desk}</p>
        <button class="add-to-favBtn" type="button">Add to favourite
                    <svg class="heart" width="16" height="16">
                        <use href="/assets/svg/symbol-defs.svg#icon-unclicked_heart">
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
    </div>
      `;
    })
    .join("");

    // gallery.insertAdjacentHTML('beforeend', markup);
    gallery.innerHTML = markup;
  }

  export default { addListNews };

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