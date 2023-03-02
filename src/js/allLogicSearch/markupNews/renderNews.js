import { newsMarkup } from "./markupNewsCards"
import { loadPopularData } from "../loadPopularNews/loadPopularNews"

const root = document.querySelector('.gallery')
function renderPopularNews() {
     loadPopularData().then(data => {
    root.innerHTML = newsMarkup(data)
})
}
 
export const loadPopularData = async () => {
  const populerData = await fetch(
    `${BASE_URL}api-key=${API_KEY}`
  );

  if (populerData.ok) {
      const popular = await populerData.json();
      console.log(popular)
    return popular.results;
  }
  throw new Error(populerData.statusText);
};

renderPopularNews()
