//   ***  Component that creates an Event Card to render to the DOM
//     *****  Chad[well] Clark

import React, {useState} from "react";
import { Link } from "react-router-dom";
import { getWeatherForecast } from "../../modules/WeatherManager.js";
import { EventWeather } from "./EventWeather.js";



export const EventCard = ({ event, deleteEvent, isLoading }) => {
  const [forecast, setForecast] = useState([]);
  const [eventWeatherButton, setEventWeatherButton] = useState(false);
  const currUser = +(sessionStorage.getItem("nutshell_user"));

  const getEventWeather = (zipcode) => {
    getWeatherForecast(zipcode)
      .then((response) => {
        
        return response;
      })
      .then((res) => {
        setForecast(res);
        return res;
      });
  };
  console.log(forecast)
  // console.log(event.userId)
  

  const toggleWeatherButton = () => {
    
    setEventWeatherButton(!eventWeatherButton)
    
  }
  if (currUser !== event.userId) {
    return (
      <div className="eventList">
        <div className="eventCard">
          <i>
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
            {eventWeatherButton !== true ? (
              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    getEventWeather(event.zipcode);
                    toggleWeatherButton();
                  }}
                >
                  Show Weather
                </button>
              </div>
            ) : (
              <EventWeather
                toggleWeatherButton={toggleWeatherButton}
                forecast={forecast}
                eventDate={event.eventDate}
              />
            )}
          </i>
        </div>
      </div>
    );


  } else {
  return (
    <div className="eventList">
      <div className="eventCard">
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
        {eventWeatherButton !== true ? (
          <div>
            <Link to={`events/${event.id}/edit`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                getEventWeather(event.zipcode)
              toggleWeatherButton()
            }
              }
            >
              Show Weather
            </button>

            <button
              type="button"
              className="btn btn-primary"
              disabled={isLoading}
              onClick={() => deleteEvent(event.id)}
            >
              Delete Event
            </button>
          </div>
        ) : (
          <EventWeather
            toggleWeatherButton={toggleWeatherButton}
            forecast={forecast}
            eventDate= {event.eventDate}
          />
        )}
      </div>
    </div>
  );
};
}
