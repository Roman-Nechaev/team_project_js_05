import { comeCardsHome } from '../../addFavourite/addFavourite';

const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';
const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?`;

export const fetchPopularData = async () => {
  const populerData = await fetch(`${BASE_URL}api-key=${API_KEY}`);

  if (populerData.ok) {
    const popular = await populerData.json();
    return popular.results;
  }
  throw new Error(populerData.statusText);
};

export async function getMostPopularData() {
  try {
    const data = await fetchPopularData();

    const normalizedData = data.map(oneNewItem => {
      const { title, abstract, published_date, url, section, media, id } =
        oneNewItem;

      const image_url = media[0]
        ? media[0]['media-metadata'][2].url
        : 'https://placehold.co/400x400?text=NO+IMAGE';

      const onewNewsFormatedData = {
        title,
        abstract: formatingDerscription(abstract),
        published_date: formatingDate(published_date),
        url,
        section,
        image_url,
        id,
      };

      return onewNewsFormatedData;
    });

    comeCardsHome(normalizedData);
    return normalizedData;
  } catch (error) {
    console.error(error);
  }
}

function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}

function formatingDate(dateToFormating) {
  return new Date(dateToFormating)
    .toLocaleString()
    .slice(0, 10)
    .split('.')
    .join('/');
}
