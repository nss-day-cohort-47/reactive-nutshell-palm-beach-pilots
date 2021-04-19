import React, {useState, useEffect} from "react";
import "./EventWeather.css";


export const EventWeather =({toggleWeatherButton, forecast, eventDate} ) => {
   const [weatherForEvent, setWeatherForEvent] = useState([])

    const getEventForecast = () => {

     setWeatherForEvent(forecast.find(day => day.datetime === eventDate))
    }
    
    const handleClose =() => {
        toggleWeatherButton()
    }
    
    
    useEffect(() => {
        getEventForecast();
    }, []);

    if (weatherForEvent === []) {
    return  (
      <div className="eventWeather">
        <div className="eventWeather-inner">
          <h3>Event Weather Forecast</h3>
          {/* <p>{forecast.data[15].weather.description.toUpperCase()} Chance of Precipitation {forecast.data[15].pop}%</p> */}
        
          <button
            className="close-btn"
            onClick={handleClose}
          >
            Close
          </button>
          
        </div>
      </div>
    )
    } else {
       return  (
      <div className="eventWeather">
        <div className="eventWeather-inner">
          <h3>No Forecast Available at this Time</h3>
          
        
          <button
            className="close-btn"
            onClick={handleClose}
          >
            Close
          </button>
          
        </div>
      </div> 
       )}
}



// console.log(
  //   forecast
  //     ? `${forecast.data[15].weather.description.toUpperCase()} Chance of Precipitation ${forecast.data[15].pop}%`
  //     : ""
  // );
  // console.log(
  //   forecast
  //     ? `HI ${forecast.data[15].max_temp}°F`
  //     : ""
  // );
  // console.log(
  //   forecast
  //     ? `LO ${forecast.data[15].min_temp}°F`
  //     : ""
  // );
  // console.log(
  //   forecast
  //     ? `Winds ${forecast.data[15].wind_cdir_full} at ${forecast.data[15].wind_spd} miles per hour`
  //     : ""
  // );
