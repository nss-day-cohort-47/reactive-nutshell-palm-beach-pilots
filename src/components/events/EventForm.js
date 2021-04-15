//   ***  Component that displays form to add new Event to current users dashboard
//     *****  Chad[well] Clark

import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import {addEvent} from "../../modules/EventManager.js"

export const EventForm = () => {
  const currUser =  +(sessionStorage.getItem("nutshell_user"));
  const [event, setEvent] = useState({
    userId: currUser,
    name: "",
    eventDate: "",
    eventTime: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    timestamp: Date.now()
  });

  console.log(event)
  const history = useHistory();

  const handleControlledInputChange =(e) => {
    const newEvent = { ...event}
    let selectedVal = e.target.value;
    newEvent[e.target.id] = selectedVal;
    setEvent(newEvent)
  }

const handleSaveEvent = (e) => {
    e.preventDefault()
    // event.timestamp = Date.now()
    if(event.name === "" ||event.eventDate === "" || event.address === "" ||event.city === "" || event.state === "" || event. zipcode === "" ) {
      window.alert("Please fill out all event information")
    } else {
      addEvent(event)
      .then(() => history.push("/events"));
    }

}

  return (
    <form>
      <fieldset>
        <div>
          <h4> Event Name</h4>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="event-form"
            placeholder="Event name"
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
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="event-form"
            placeholder="Event Date"
            value={event.eventDate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <h5> Event Time</h5>
          <label htmlFor="time"></label>
          <input
            type="time"
            id="eventTime"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="event-form"
            placeholder="Event Date"
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
            onChange={handleControlledInputChange}
            className="event-form"
            placeholder="Address"
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
            onChange={handleControlledInputChange}
            className="event-form"
            placeholder="City"
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
            onChange={handleControlledInputChange}
            className="event-form"
            placeholder="State"
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
            onChange={handleControlledInputChange}
            className="event-form"
            placeholder="Zipcode"
            value={event.zipcode}
          />
        </div>
      </fieldset>
      {/* <input
        type="hidden"
        id="timestamp"
        // onChange={}
        className="event-form"
        value={event.timestamp = Date.now()}
      /> */}
      <button className="btn btn-primary" onClick={handleSaveEvent}>
        Save New Event
      </button>
    </form>
  );
};
