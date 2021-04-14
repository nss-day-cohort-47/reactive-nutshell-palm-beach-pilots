import React from "react";
import { Route } from "react-router-dom";
import { FriendsCard } from "./friends/FriendsCard";
import { Weather } from "./weather/Weather.js";
import { EventForm } from "./events/EventForm.js";
import { EventList } from "./events/EventList.js";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <FriendsCard />
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route exact path="/events">
        {<EventList />}
      </Route>
      <Route path="/events/create">{<EventForm />}</Route>
      <Route path="/events/:eventId(\d+)/edit"></Route>
      <Route path="/events/:eventId(\d+)/weather"></Route>
    </>
  );
}
