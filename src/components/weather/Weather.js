import React, {useState, useEffect} from 'react'

import { getWeatherForecast, getWeatherZip } from '../../modules/WeatherManager'

export const Weather = () => {

    const [weather, setWeather] = useState({})
    const [forecast, setForecast] = useState({})

    useEffect(() => {
        getWeatherZip(37067)
        .then((weather) => {
            
            console.log(weather)
            setWeather(weather)
        })
        // .then(getWeatherForecast())
        // .then((forecast)=> {
        //     console.log(forecast)
        // })     
        return () => {           
        }
    }, [])

    
    // if(weather !== {}){
        
    return (
      <div className="weather">
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.main.temp}&#8457;</p>

          <p>{weather.weather[0].description.toUpperCase()}</p>
          <p>{weather.wind.speed} mph</p>
        </div>

        <p>{weather.coord.lat}  {weather.coord.lon}</p>
      </div>
    );
    // } else {
    //     return(
    //         <div>
    //             <h3>No Weather Data available</h3>
    //         </div>
    //     )
    // }
};





// let fiveDayForcast = ""
// //   ***  DOM Target declared  ***   //
//   const DomTarget = document.querySelector("#weather");
//   for (let i = 1; i < forecast.daily.length-2; i++) {
    
//     //   ***  UNIX timestamp for each day declared for manipulation
//     const timestamp = forecast.daily[i].dt;

//     //   ***  date declared as new Javascript DATE object (adding milliseconds)
//     const date = new Date(timestamp * 1000);

//     //   ***   Daily Forecast HTML Template  ***   //
//     const dailyForecast = `
//         <div><img class="icon" src="http://openweathermap.org/img/wn/${
//           forecast.daily[i].weather[0].icon
//         }.png">${date
//       .toLocaleString("en-US", { weekday: "short" })
//       .toUpperCase()}    
//         ${date.getMonth() + 1}/${date.getDate()}       
//         ${forecast.daily[i].temp.max.toFixed(0)}&#8457;-${forecast.daily[
//       i
//     ].temp.min.toFixed(0)}&#8457;    
//         ${forecast.daily[i].weather[0].description.toUpperCase()}
//         </div>
//         `;
//         //   ***  Append Daily Forecast to DOM at DOM Target  ***   //
        
//      fiveDayForcast += dailyForecast;
//   }
//   DomTarget.innerHTML = fiveDayForcast
// };