import React from "react"
import { Route } from "react-router-dom"
import { MessageForm } from "./message/MessageForm"
import { MessageList } from "./message/MessageList"
import { MessageEdit } from "./message/MessageEdit"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
      </Route>

      <Route path="/messages/post">
        {/* Render the component for posting a message */}
        <MessageForm />
      </Route>

      <Route path="/messages/:messageId(\d+)/edit/">
        {/* Render the component for posting a message */}
        <MessageEdit />
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
