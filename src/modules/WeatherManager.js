//     *****     Chad[well] Clark 2021     *****     //

//   ***   Data manager component for handling Weather
//   ***   GET for two weather APIs based on zipcode


import { settings } from "../components/weather/WeatherSettings.js";

//   ***  Create array to hold a copy of weather data  ***   //
let weatherData = [];
//   ***  Function to return a copy of weather data array   ***  //
export const useWeatherData = () => {
  return [...weatherData];
};

//   ***  Function to Fetch current conditions from OpenWeather  API
//        ***  passing in zipcode as parameter

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

//   ***  Function to Fetch 16 day forecast from Weatherbit.io API
//        ***  passing in zipcode as parameter

export const getWeatherForecast = (zipcode) => {
  return fetch(`
    http://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipcode}&country=US&units=I&key=${settings.weatherKey2}
    `)
    .then((response) => response.json())
    .then((data) => {
      weatherData = data;
      return data; //   ***  Parsed array returned  ***   //
    });
};
