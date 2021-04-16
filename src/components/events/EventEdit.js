//   ***  Component that displays form to edit and update an Event 
//     *****  Chad[well] Clark

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editEvent, getEventById } from "../../modules/EventManager.js";

export const EditEvent = () => {
  const [event, setEvent] = useState({})
  const [isLoading, setIsLoading] = useState(false);
    

  // console.log(event);
  const history = useHistory();
  const {eventId} = useParams();

  const handleFieldChange = (e) => {
    const stateToChange = { ...event };
    let editedVal = e.target.value;
    
    stateToChange[e.target.id] = editedVal;
    setEvent(stateToChange);
  };
  
  const cancelEdit = (e) => {
    e.preventDefault();
    history.push("/events");
  }

  const updateEvent = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const editedEvent = {
      id: eventId,
      userId: event.userId,
      name: event.name,
      address: event.address,
      city: event.city,
      state: event.state,
      zipcode: event.zipcode,
      eventDate: event.eventDate,
      eventTime: event.eventTime,
      timestamp: event.timestamp
    }
    console.log(editedEvent)
    editEvent(editedEvent)
      .then(() => history.push("/events"));
    };
    useEffect(() => {
      getEventById(eventId).then((event) => {
        setEvent(event);
        setIsLoading(false);
      });
    }, [eventId]);
    
    return (
      <form>
        <fieldset>
          <div>
            <h4> Event Name</h4>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              onChange={handleFieldChange}
              required
              autoFocus
              className="event-form"
              value={event.name}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <h5> Event Date</h5>
            <label htmlFor="date"></label>
            <input
              type="date"
              id="eventDate"
              onChange={handleFieldChange}
              required
              autoFocus
              className="event-form"
              value={event.eventDate}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <h5> Event Time</h5>
            <label htmlFor="date"></label>
            <input
              type="time"
              id="eventTime"
              onChange={handleFieldChange}
              required
              autoFocus
              className="event-form"
              value={event.eventTime}
            />
          </div>
        </fieldset>
        <h5>Event Location:</h5>
        <fieldset>
          <div>
            <label htmlFor="address"></label>
            <input
              type="text"
              id="address"
              onChange={handleFieldChange}
              className="event-form"
              value={event.address}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="city"></label>
            <input
              type="text"
              id="city"
              onChange={handleFieldChange}
              className="event-form"
              value={event.city}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="state"></label>
            <input
              type="text"
              id="state"
              onChange={handleFieldChange}
              className="event-form"
              value={event.state}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="zipcode"></label>
            <input
              type="text"
              id="zipcode"
              onChange={handleFieldChange}
              className="event-form"
              value={event.zipcode}
            />
          </div>
        </fieldset>
        <button
          type="button"
          disabled={isLoading}
          className="btn btn-primary"
          onClick={updateEvent}
        >
          Save Edited Event
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={cancelEdit}
        >
          Cancel Edit
        </button>
      </form>
    );

};