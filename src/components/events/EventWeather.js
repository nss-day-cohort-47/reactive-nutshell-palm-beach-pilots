//   ***  Component that displays Event Weather in a popup unless it is unavailable
//     *****  Chad[well] Clark  2021

import React, { useState, useEffect } from "react";
import "./EventWeather.css";
import { getWeatherForecast } from "../../modules/WeatherManager.js";

export const EventWeather = ({ toggleWeatherButton, zipcode, eventDate }) => {
  const [weatherForEvent, setWeatherForEvent] = useState([]);
  //    const [forecast, setForecast] = useState([]);
  const [showForecast, setShowForecast] = useState(false);

  const getEventForecast = (forecast) => {
    // const x = forecast.filter((day) => day.datetime === eventDate);
    setWeatherForEvent(forecast.filter((day) => day.datetime === eventDate));
  };

  const handleClose = () => {
    // setShowForecast(false);
    toggleWeatherButton();
  };
  const getEventWeather = (zipcode) => {
    getWeatherForecast(zipcode)
      .then((response) => {
        return response;
      })
      .then((res) => {
        //   setForecast(...res.data)
        getEventForecast(res.data);
        return res;
      })
      .then(() => setShowForecast(true));
  };

  useEffect(() => {
    getEventWeather(zipcode);
  }, []);

  if (weatherForEvent.length > 0) {
    return (
      <div className="eventWeather">
        <div className="eventWeather-inner">
          <h3>Event Weather Forecast</h3>
          <p>
            {weatherForEvent[0].weather.description.toUpperCase()} Chance of
            Precipitation {weatherForEvent[0].pop}%
          </p>
          <p>HI {weatherForEvent[0].max_temp}°F</p>
          <p>LO {weatherForEvent[0].min_temp}°F</p>
          <p>
            Winds {weatherForEvent[0].wind_cdir_full.toUpperCase()} at{" "}
            {weatherForEvent[0].wind_spd} miles per hour
          </p>
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="eventWeather">
        <div className="eventWeather-inner">
          <h3>No Forecast Available at this Time</h3>

          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
};


