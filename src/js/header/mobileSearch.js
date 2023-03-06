const inputEl = document.querySelector(`.search-input`)
const searchButtonEl = document.querySelector(`.search-btn`)

searchButtonEl.addEventListener(`click`, mobileSearch);

function mobileSearch() {
    if (screen.width < 768 && localStorage) {
        inputEl.style.display = `block`;
        inputEl.style.width = `173px`;
        searchButtonEl.style.left = `14px`;
    } 
     return;
    }