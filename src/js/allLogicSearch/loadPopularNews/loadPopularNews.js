const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';
const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?`;



export const loadPopularData = async () => {
  const populerData = await fetch(
    `${BASE_URL}api-key=${API_KEY}`
  );

  if (populerData.ok) {
    const popular = await populerData.json();
    return popular.results;
  }
  throw new Error(populerData.statusText);
};