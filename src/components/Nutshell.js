import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Grid, Cell } from "styled-css-grid";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Weather } from "./weather/Weather.js";
import { FriendsSB } from "./friends/FriendsSB";
import { MessagesSB } from "./message/MessagesSB"
import { EventsSB} from "./events/EventSB"
import { Register } from "./auth/Register";
import "./Nutshell.css";



export const Nutshell = () => (

  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nutshell_user")) {
          return (
            <>
              <NavBar />
              <Grid flow="row dense" columns={6}>
                <Cell width={1} height={1}>
                  <Weather zip="37067"/>
  </Cell>
                <Cell width={4} height={6}>
                   <ApplicationViews />
  </Cell>
                <Cell width={1} height={1}>
                  < FriendsSB />
  </Cell>
                <Cell>
                  <EventsSB />
  </Cell>
                <Cell>
                <MessagesSB />
  </Cell>
              </Grid>
              

            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
