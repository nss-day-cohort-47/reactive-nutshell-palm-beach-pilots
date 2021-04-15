//   ***  Component that displays list of Event cards to current users dashboard
//     *****  Chad[well] Clark

import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard.js";
import {
  getAllEvents,
  removeEvent,
} from "../../modules/EventManager.js";
import { useHistory } from "react-router";
import { getFriends } from "../../modules/FriendsManager.js";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  const history = useHistory();
  const currUser = +sessionStorage.getItem("nutshell_user");

  const getUsersFriends = () => {
   return getFriends()
  .then(friendsFromAPI => {
  return  setFriends(friendsFromAPI)
    // console.log(friendsFromAPI)
  })
  
  }
  
  
  
  const getEvents = () => {
    return getAllEvents()
    .then((eventsFromAPI) => {
      console.log(eventsFromAPI)
      setEvents(eventsFromAPI);
    });
  };
  
  const deleteEvent = (id) => {
    removeEvent(id).then(getEvents);
  };
  
  useEffect(() => {
    getUsersFriends()
    getEvents()
    .then(() => setIsLoading(false));
  }, []);
  
  // useEffect(() => {
    //   .then(() => console.log(friends))
    // }, [])
    
    // console.log(currUser)
    // console.log(events)
    console.log(friends)
  return (
    <>
      <section>
        <button
          type="button"
          className="btn btn-primary"
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
          .filter(
            (event) => event.userId === currUser 
          )
          .map((event) => (
            <EventCard
              event={event}
              key={event.id}
              deleteEvent={deleteEvent}
              isLoading={isLoading}
            />
          ))}
      </div>
    </>
  );
};
