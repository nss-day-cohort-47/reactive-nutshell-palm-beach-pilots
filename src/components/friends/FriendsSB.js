import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../../components/Nutshell.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFriends } from "../../modules/FriendsManager";
import { getCurrentUser } from '../helper/helperFunctions';

export const FriendsSB = () => {
    const [friendNames, setFriendNames] = useState([]);
    const history = useHistory();
    const getAllFriends = () => {
        return getFriends().then(friendsFromAPI => {
            return friendsFromAPI
        });
    };
    const goto = () =>{
        history.push("/friends")
    }
    useEffect(() => {
        getAllFriends().then(friendsFromAPI => {
            return setFriendNames(friendsFromAPI);
        })
    }, []);
    return (
        <div onClick={goto}>
            <h4>My Friends</h4>
            <hr></hr>
            {friendNames.map(friend => {
                return <div className="friendslist" key={friend.id}><span className="friendName">{friend.user.name}</span> </div>
            })}
            
            <hr></hr>
        </div>
    )
}