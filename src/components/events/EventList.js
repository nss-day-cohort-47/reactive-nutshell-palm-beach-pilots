//   ***  Component that displays list of Event cards to current users dashboard
//     *****  Chad[well] Clark  2021

import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard.js";
import { getAllEvents, removeEvent } from "../../modules/EventManager.js";
import { useHistory } from "react-router";
import { getFriends } from "../../modules/FriendsManager.js";


export const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  const history = useHistory();
  const currUser = +sessionStorage.getItem("nutshell_user");

  const getUsersFriends = () => {
    return getFriends()
    .then((friendsFromAPI) => {
      return setFriends(friendsFromAPI);
      // console.log(friendsFromAPI)
    });
  };

  let All = [];
  friends.forEach((friend) => {
    All.push(friend.userId);
    return All;
  });
  // console.log("All", All);

  const getEvents = () => {
    return getAllEvents()
    .then((eventsFromAPI) => {
      // console.log(eventsFromAPI);
      return setAllEvents(
        eventsFromAPI.sort((x, y) => {
          let a = new Date(x.eventDate),
              b = new Date(y.eventDate);
              return a-b;
        })
      );
    });
  };


    const deleteEvent = (id) => {
      removeEvent(id)
      .then(getEvents);
    };
    
    useEffect(() => {
      getUsersFriends();
      getEvents()
      .then(() => setIsLoading(false));
    }, []);

  return (
    <>
      <section className="event_section">
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
        {allEvents
          .filter(
            (event) => event.eventDate >= new Date().toISOString().substr(0,10)
          )
          .filter(
            (event) => event.userId === currUser || All.includes(event.userId)
          )
          .map((event) => (
            <EventCard
              event={event}
              key={event.id}
              deleteEvent={deleteEvent}
              isLoading={isLoading}
              // getEventWeather={getEventWeather}
            />
          ))}
      </div>
    </>
  );
};
