import { settings } from "../components/weather/WeatherSettings.js";

//   ***  Create array to hold a copy of weather data  ***   //
let weatherData = [];
//   ***  Function to return a copy of weather data array   ***  //
export const useWeatherData = () => {
  return [...weatherData];
};

export const getWeatherZip = (zipcode) => {
  return fetch(`
    https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${settings.weatherKey}
    `)
    .then((response) => response.json())
    .then((data) => {
      weatherData = data;
      return data; //   ***  Parsed array returned  ***   //
    });
};
//   ***  Function to Fetch 7 day forecast from OpenWeather onecall API
//        ***  passing in latitude and longitude as parameters
// export const getWeatherForecast = (latitude, longitude) => {
//   return fetch(`
//     https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly&appid=${settings.weatherKey}
//     `)
//     .then((response) => response.json())
//     .then((data) => {
//       weatherData = data;
//       return data; //   ***  Parsed array returned  ***   //
//     });
// };
