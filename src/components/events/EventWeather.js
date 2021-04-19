import React, { useState } from "react";
import "./EventWeather.css";


export const EventWeather =(props) => {
    const [buttonEventWeather, setButtonEventWeather] = useState(false);

    
    return  (props.trigger) ? (
        <div className="eventWeather">
           <div className="eventWeather-inner">
               <h3>EventWeather</h3>
               <button className="close-btn">Close</button>
               {props.children}
               </div> 

        </div>
    ) : "";
}



