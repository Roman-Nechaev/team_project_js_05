import axios from 'axios';

const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';
const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?`;

axios.defaults.baseURL = BASE_URL;

export const loadPopularData = async () => {
  const params = {
    'api-key': API_KEY,
  };
  try {
    const response = await axios.get('', { params });
    if (response.status === 200) {
      return response.data.results;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};
