import React, {useState, useEffect} from 'react';
import {EventCard} from "./EventCard.js"
import {getAllEvents, getEventsById, removeEvent} from "../../modules/EventManager.js";
import {useHistory} from "react-router"

export const EventList = () => {
    const [events, setEvents] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    const currUser = +sessionStorage.getItem("nutshell_user");

    const getEvents = () => {
    return getAllEvents()
    .then(eventsFromAPI => {
        // let userEvents = 
        setEvents(eventsFromAPI)
    });
    };

    const deleteEvent = (id) => {
        removeEvent(id)
        .then(getEvents)
    };

    useEffect(() => {
        getEvents()
        .then(() => setIsLoading(false))
    }, []);
    console.log(currUser)
    return (
      <>
        <section>
          <button
            type="button"
            id="addEvent"
            onClick={() => {
              history.push("events/create");
            }}
          >
            ADD New event
          </button>
        </section>
        <div>
          {events
            .filter((event) => event.userId === currUser)
            .map((event) => (
              <EventCard
                event={event}
                key={event.id}
                deleteEvent={deleteEvent}
                isLoading={isLoading}
              />
            ))
            }
        </div>
      </>
    );


};

