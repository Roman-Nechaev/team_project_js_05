const containerGallery = document.querySelector('.gallery');
import imgDefault from '../../../assets/default-news-1.jpg';

let newsDefaultMarkup = () => {
  return `
  <div class="default-news container">
    <h2 class="default-news-title">We haven’t found news from <br> this category</h2>
       <div class="default-news-img section">
       <img srcset='${imgDefault}'
       src="${imgDefault}" alt="default-news" width="248" height="198">
        </div>
</div>
    `;
};
// favConPageRef.innerHTML = newsDefaultMarkup();
export default function newDefaultMarkup() {
  containerGallery.innerHTML = newsDefaultMarkup();
}
