const defaultPageRef = document.querySelector('.default-news');
const favConPageRef = document.querySelector('.gallery');

export async function chectPage(arr) {
  console.log(arr.length);

  //   return (await arr.length) === 0
  //     ? favConPageRef.classList.toggle('dis-none')
  //     : defaultPageRef.classList.toggle('dis-none');
}

// export const newsDefaultMarkup = () => {
//   return `
//              <div class="default-news container">
//     <h2 class="default-news-title">We haven’t found news from <br> this category</h2>
//        <div class="default-news-img section">
//             <img srcset="/assets/default-news-1.jpg 1x, /assets/default-news-2.jpg 2x"
//             src="/assets/default-news-1.jpg" alt="default-news" width="248" height="198">
//         </div>
// </div>

//     `;
// };

// favConPageRef.innerHTML = newsDefaultMarkup();
