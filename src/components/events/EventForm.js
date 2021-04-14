import React, { useState } from "react";

export const EventForm = () => {
  const [event, setEvent] = useState({
    name: "",
    eventDate: "",
    location: "",
    timestamp: ""
  });

  const [address, setAddress] = useState()
  const [state, setState] = useState()
  const [zipcode, setZipcode] = useState()

const handleSaveEvent = (event) => {
    event.preventDefault()


    

}

  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="name"> Event Name </label>
          <input
            type="text"
            id="name"
            // onChange={}
            className="event-form"
            placeholder="Event name"
            value={event.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="date"> Event Date </label>
          <input
            type="date"
            id="eventDate"
            // onChange={}
            className="event-form"
            placeholder="Event name"
            value={event.eventDate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="address"> Address </label>
          <input
            type="text"
            id="address"
            // onChange={}
            className="event-form"
            placeholder="Address"
            value={event.address}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="state"> State </label>
          <input
            type="text"
            id="state"
            // onChange={}
            className="event-form"
            placeholder="State"
            value={event.state}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="zipcode"> ZipCode </label>
          <input
            type="text"
            id="zipcode"
            // onChange={}
            className="event-form"
            placeholder="Zipcode"
            value={event.zipcode}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleSaveEvent}>
        Save New Event
      </button>
    </form>
  );
};
