//   ***  Component that creates an Event Card to render to the DOM
//     *****  Chad[well] Clark

import React from "react";
import { Link } from "react-router-dom";



export const EventCard = ({ event, deleteEvent, isLoading , getEventWeather}) => {
  const currUser = +(sessionStorage.getItem("nutshell_user"));
  // console.log(currUser)
  // console.log(event.userId)
  
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
        {/* <Link to={`events/${event.id}/weather`}> */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => getEventWeather(event.zipcode)}
          >
            Show Weather
          </button>
        {/* </Link> */}
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

      <Link to={`events/${event.id}/edit`}>
        <button className="btn btn-primary">Edit</button>
      </Link>
      {/* <Link to={`events/${event.id}/weather`}> */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => getEventWeather(event.zipcode)}
        >
          Show Weather
        </button>
      {/* </Link> */}
      <button
        type="button"
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => deleteEvent(event.id)}
      >
        Delete Event
      </button>
      
     </div>
    </div>
  );
};
}
