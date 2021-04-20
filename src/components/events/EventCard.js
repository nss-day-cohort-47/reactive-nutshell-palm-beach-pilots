//   ***  Component that creates an Event Card to render to the DOM
//     *****  Chad[well] Clark

import React, {useState} from "react";
import { Link } from "react-router-dom";

import { EventWeather } from "./EventWeather.js";



export const EventCard = ({ event, deleteEvent, isLoading }) => {
  
  const [eventWeatherButton, setEventWeatherButton] = useState(false);
  const currUser = +(sessionStorage.getItem("nutshell_user"));

  // const getEventWeather = (zipcode) => {
  //   getWeatherForecast(zipcode)
  //     .then((response) => {
  //       return response;
  //     })
  //     .then((res) => {
  //       setForecast(...res.data);

  //       return res;
  //     })
  //     .then(() => toggleWeatherButton());
  // };
  // console.log(forecast)
  // console.log(event.userId)
  

  const toggleWeatherButton = () => {

    setEventWeatherButton(!eventWeatherButton)
    
  }
  if (currUser !== event.userId) {
    return (
      <div className=" zcard card">
        <div>
          <i>
            <div className="event">
              <h3>
                Event: <span> {event.name}</span>
              </h3>
              <p>
                <strong>Event Date:</strong> {event.eventDate}
              </p>
              <p>
                <strong>Event Time:</strong> {event.eventTime}
              </p>
              <h5>Event Location: </h5>
              <p>{event.address}</p>
              <p>
                {event.city}, {event.state} {event.zipcode}
              </p>
            </div>
            {eventWeatherButton !== true ? (
              <div className="btn_group">
                <button
                  type="button"
                  className="btn_otherColor"
                  onClick={() => {
                    // getEventWeather(event.zipcode);
                    toggleWeatherButton();
                  }}
                >
                  Show Weather
                </button>
              </div>
            ) : (
              <EventWeather
                toggleWeatherButton={toggleWeatherButton}
                zipcode={event.zipcode}
                eventDate={event.eventDate}
              />
            )}
          </i>
        </div>
      </div>
    );


  } else {
  return (
    <div>
      <div className=" zcard card">
        <div className="event">
          <h3>
            Event: <span> {event.name}</span>
          </h3>
          <p>
            <strong>Event Date:</strong> {event.eventDate}
          </p>
          <p>
            <strong>Event Time:</strong> {event.eventTime}
          </p>
          <h5>Event Location: </h5>
          <p>{event.address}</p>
          <p>
            {event.city}, {event.state} {event.zipcode}
          </p>
        </div>
        {eventWeatherButton !== true ? (
          <div className="btn_group">
            <Link to={`events/${event.id}/edit`}>
              <button className="friendBtn">Edit</button>
            </Link>
            <button
            
              type="button"
              className=" btn_otherColor"
              onClick={() => {
                // getEventWeather(event.zipcode)
                toggleWeatherButton();
              }}
            >
              Show Weather
              
            </button>

            <button
              type="button"
              className="btn_Cancel"
              disabled={isLoading}
              onClick={() => deleteEvent(event.id)}
            >
              Delete Event
            </button>
          </div>
        ) : (
          <EventWeather
            toggleWeatherButton={toggleWeatherButton}
            zipcode={event.zipcode}
            eventDate={event.eventDate}
          />
        )}
      </div>
    </div>
  );
};
}
