import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getFriends } from "../../modules/FriendsManager";
import {getAllEvents} from '../../modules/EventManager';
import "../../components/Nutshell.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const EventsSB = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [friends, setFriends] = useState([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const currUser = +sessionStorage.getItem("nutshell_user");
    const goto = () =>{
        history.push("/events")
    }
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
                        return a - b;
                    })
                );
            });
    };

    useEffect(() => {
        getUsersFriends();
        getEvents()
            .then(() => setIsLoading(false));
    }, []);
 return(
    <div className="Sidebar" onClick={goto}>
    <h4>Events</h4>
    <hr></hr>
    {allEvents.map(item => {
        return <div className="card" key={item.id}>
            <div className="friendName">{item.name}</div>
            <div className="friendName">Date:{item.eventDate}</div>
            <div className="friendName">Time:{item.eventTime}</div>
         </div>
    })}
    
    <hr></hr>
</div>
    )
}