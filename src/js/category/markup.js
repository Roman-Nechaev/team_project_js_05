import dateFormat, { masks } from 'dateformat';
export function newsMarkup({
  //   id, //data-id="${id}"
  multimedia,
  section, //category
  abstract, //description
  title, //title
  published_date,
  url, //Read more
  slug_name,
}) {
  const img = multimedia[2].url;
  // console.log(img); //------ссилка на картинку
  function checkUrkImg() {
    if (!multimedia.length) {
      return 'https://placehold.co/400x400?text=NO+IMAGE';
    }
    return img;
  }
  return `
  <div class="newsHomePage-card" data-id=${slug_name}>
  <div class="card-picture">
      <img
        class="newsHomePage-image"
        src="${checkUrkImg()}"
        alt="news cover"
        width="288"
        height="395"
      />
      <p class="dispNo newsHomePage-status-read">Already read</p>
      <p class="newsHomePage-search-category">${section}</p>
      
      <button class="add-to-favBtn test-favBtn" type="button" data-id=${slug_name}>Add to favourite
                  <svg class="heart" width="16" height="16">
                      <use href="/assets/svg/symbol-defs.svg#icon-unclicked_heart">
                      </use>
                  </svg>
              </button>
    </div>
    <div>
      <h2 class="newsHomePage-title">
        ${title}
      </h2>
      <p class="newsHomePage-text">
        ${formatingDerscription(abstract)}
      </p>
    </div>
    <div class="homePage-readMore">
      <p class="newsHomePage-date">${firmatDate(published_date)}</p>
      <a class="newsHomePage-readMore-link" target = "_blank" href="${url}">Read more</a>
    </div>
  </div>
  </div>`;
}

function firmatDate(date) {
  const now = new Date(date);
  return dateFormat(now, 'dd/mm/yyyy');
}
function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}
