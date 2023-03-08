import axios from 'axios';

async function getCurrentWeather(lat, lon, api_key) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);

    const date = new Date();
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    const weekday = date.toLocaleString('en-US', { weekday: 'long' });

    const degreesEl = document.querySelector('.degrees');
    const whatsTheWeatherEl = document.querySelector('.whats-the-weather');
    const weekDayEl = document.querySelector('.week-day');
    const weatherDateEl = document.querySelector('.weather-date');
    const iconEl = document.querySelector('.weather-icon');

    degreesEl.innerHTML = `${Math.round(data.main.temp)}°`;
    whatsTheWeatherEl.innerHTML =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    weekDayEl.innerHTML = weekday;
    weatherDateEl.innerHTML = formattedDate;

    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    iconEl.setAttribute('src', iconUrl);
  } catch (error) {
    console.log(error);
  }
}

async function getCityName(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data.address.city;
  } catch (error) {
    console.log(error);
  }
}

async function getWeatherForecast(lat, lon, api_key) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);
    // console.log(
    //   `5-day weather forecast for the location: ${data.city.name}, ${data.city.country}`
    // );
    const forecastList = data.list;
    forecastList.forEach(forecast => {
      const date = new Date(forecast.dt * 1000);
    });
    const buttonEl = document.querySelector('.show-on-map');
    buttonEl.addEventListener('click', () => openGoogleMaps(data.city.name));
  } catch (error) {
    console.log(error);
  }
}

export const weatherService = async () => {
  try {
    const position = await getPosition();
    if (!position) {
      // console.log('Could not get geolocation');
      return;
    }

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const api_key = 'ba95449c69063d2989b1d45f265b0f98';

    const cityName = await getCityName(lat, lon);
    // console.log(`Location: ${cityName}`);
    const locationEl = document.querySelector('.location');
    locationEl.innerHTML = cityName;

    await getCurrentWeather(lat, lon, api_key);
    await getWeatherForecast(lat, lon, api_key);
  } catch (error) {
    console.log(error);
  }
};

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => {
        // console.log(error);
        resolve(null);
      }
    );
  }).then(position => {
    if (position) {
      return position;
    } else {
      return { coords: { latitude: 50.4501, longitude: 30.5234 } };
    }
  });
}

function openGoogleMaps(cityName) {
  if (cityName === undefined) {
    cityName = 'Kyiv';
  }
  const url = `https://www.google.com/maps/place/${cityName}`;
  window.open(url, '_blank');
}
