const containerGallery = document.querySelector('.gallery');
import imgDefault1 from '../../../assets/default-news-1.png';
import imgDefault2 from '../../../assets/default-news-2.png';

let newsDefaultMarkup = () => {
  return `
  <div class="default-news container">
    <h2 class="default-news-title">We haven’t found news from this category</h2>
       <div class="default-news-img">
       <img srcset='${imgDefault1} 1x, ${imgDefault2} 2x'
       src="${imgDefault1}" alt="default-news" width="248" height="198">
        </div>
</div>
    `;
};

export default function newDefaultMarkup() {
  containerGallery.innerHTML = newsDefaultMarkup();
}
