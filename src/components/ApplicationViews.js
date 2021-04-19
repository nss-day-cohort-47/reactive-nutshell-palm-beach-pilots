import React from "react"
import { Route } from "react-router-dom"
import { MessageForm } from "./message/MessageForm"
import { MessageList } from "./message/MessageList"
import { MessageEdit } from "./message/MessageEdit"
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

      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
      </Route>

      <Route path="/messages/:messageId(\d+)/edit/">
        {/* Render the component for posting a message */}
        <MessageEdit />
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
