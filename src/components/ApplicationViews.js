import React from "react"
import { Route } from "react-router-dom"
// import { MessageForm } from "./message/MessageForm"
import { MessageList } from "./message/MessageList"
import { MessageEdit } from "./message/MessageEdit"
import { FriendsList } from "./friends/FriendsList";

import { EventForm } from "./events/EventForm.js";
import { EventList } from "./events/EventList.js";
import { EditEvent } from "./events/EventEdit.js"
import { ArticlesList } from "./articles/ArticlesList"
import { TaskList } from "./task/TaskList"
import { TaskEditForm } from "./task/TaskEdit"
import { TaskForm } from "./task/TaskForm"


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <ArticlesList />
        {/* Render the component for news articles */}
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendsList />
      </Route>

      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
      </Route>

      <Route path="/messages/:messageId(\d+)/edit/">
        {/* Render the component for posting a message */}
        <MessageEdit />
      </Route>

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
        <TaskList />
      </Route>

      <Route path="/tasks/add">
        {/* Render the component for the user's tasks */}
        <TaskForm />
      </Route>

      <Route path="/tasks/:taskId(\d+)/edit/">
        {/* Render the component for the user's tasks */}
        <TaskEditForm />
      </Route>

      <Route exact path="/events">
        {/* Render the component for the user's list of events */}
        {<EventList />}
      </Route>
      <Route path="/events/create">
        {/* Render the component form to add event */}
        {<EventForm />}
      </Route>
      <Route path="/events/:eventId(\d+)/edit">
        {/* Render the component form to edit event */}
        {<EditEvent />}
      </Route>
      
    </>
  );
}
