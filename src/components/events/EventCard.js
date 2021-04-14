//   ***  

import React from 'react';
import { Link } from "react-router-dom";

export const  EventCard = ({ event, deleteEvent, isLoading }) => {
    return (
      <div>
        <h3>
          Event: <span> {event.name}</span>
        </h3>
        <p>Event Date: {event.eventDate}</p>
        <p>Event Location: {event.location}</p>
        <Link to={`events/${event.id}/edit`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <Link to={`events/${event.id}/weather`}>
          <button className="btn btn-secondary">Show Weather</button>
        </Link>
        <button
          type="button"
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => deleteEvent(event.id)}
        >
          Delete Event
        </button>
      </div>
    );

}