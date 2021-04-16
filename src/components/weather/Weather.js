import React, {useState, useEffect} from 'react'

import {  getWeatherZip } from '../../modules/WeatherManager'


export const Weather = (zip) => {
  
    // const[zipcode, setZipcode] = useState()
    const [weather, setWeather] = useState({"weather": [{}]})
   
    // if (zip) {
    //   setZipcode(zip)
    // } else {
    //   setZipcode(37204)
    // }

    useEffect(() => {
      
        getWeatherZip(37204)
        .then((weather) => {
            
            console.log(weather)
            setWeather(weather)
        })
           
        return () => {           
        }
    }, [])

    if (weather) {
    return (
      <div className="weather">
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.main?.temp}&#8457;</p>

          <p>{weather.weather[0]?.description?.toUpperCase()}</p>
          <p>{weather.wind?.speed} mph</p>
        </div>

        <p>{weather.coord?.lat}  {weather.coord?.lon}</p>
      </div>
    );
    
};
}





