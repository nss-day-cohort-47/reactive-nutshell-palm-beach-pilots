//     *****     Chad[well] Clark 2021     *****     //

//   ***  Component for displaying current weather for current user's locality
//   ***   Defaulting to Nashville, TN

import React, { useState, useEffect } from "react";

import { getWeatherZip } from "../../modules/WeatherManager";

export const Weather = () => {
  // const[zipcode, setZipcode] = useState()
  const [weather, setWeather] = useState({ weather: [{}] });

  // if (zip) {
  //   setZipcode(zip)
  // } else {
  //   setZipcode(37204)
  // }

  useEffect(() => {
    getWeatherZip(37204).then((weather) => {
      //console.log(weather);
      setWeather(weather);
    });

    return () => {};
  }, []);

//console.log(weather)

  if (weather) {
    return (
      <div className="card weather">
        <div>
          <h3>{weather.name}</h3>
          <p>{Math.round(+(weather.main?.temp))}&#8457;</p>

          <p>{weather.weather[0]?.description?.toUpperCase()}</p>
          <p>{Math.round(+(weather.wind?.speed))} mph</p>
        </div>

        
      </div>
    );
  }
};
