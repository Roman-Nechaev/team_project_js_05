// import axios from 'axios';
// export { fetchWeatherData };

// async function getCurrentWeather(lat, lon, api_key) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
//     console.log(`Location: ${data.name}, ${data.sys.country}`);
//     console.log(`Weather now: ${data.weather[0].description}`);
//     console.log(`Temperature: ${data.main.temp}°C`);

//     const date = new Date();
//     const options = {
//       // weekday: 'short',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     };
//     const formattedDate = date.toLocaleDateString('en-US', options);
//     const weekday = date.toLocaleString('en-US', { weekday: 'long' });

//     const degreesEl = document.querySelector('.degrees');
//     const whatsTheWeatherEl = document.querySelector('.whats-the-weather');
//     const locationEl = document.querySelector('.location');
//     const weekDayEl = document.querySelector('.week-day');
//     const weatherDateEl = document.querySelector('.weather-date');

//     degreesEl.innerHTML = `${Math.round(data.main.temp)}°`;
//     whatsTheWeatherEl.innerHTML = data.weather[0].description;
//     locationEl.innerHTML = data.name;
//     weekDayEl.innerHTML = weekday;
//     weatherDateEl.innerHTML = formattedDate;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getWeatherForecast(lat, lon, api_key) {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
//     console.log(
//       `5-day weather forecast for the location: ${data.city.name}, ${data.city.country}`
//     );
//     const forecastList = data.list;
//     forecastList.forEach(forecast => {
//       const date = new Date(forecast.dt * 1000);
//       // console.log(`Date: ${date.toDateString()}`);
//       // console.log(`Weather: ${forecast.weather[0].description}`);
//       // console.log(`Temperature: ${forecast.main.temp}°C`);
//       // console.log(`Wind: ${forecast.wind.speed} m/s`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetchWeatherData() {
//   try {
//     const position = await getPosition();
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const api_key = 'ba95449c69063d2989b1d45f265b0f98';
//     await getCurrentWeather(lat, lon, api_key);
//     await getWeatherForecast(lat, lon, api_key);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function getPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       error => {
//         console.log(error);

//         const defaultPosition = {
//           coords: { latitude: 51.5072, longitude: -0.1276 },
//         };
//         resolve(defaultPosition);
//       }
//     );
//   });
// }
