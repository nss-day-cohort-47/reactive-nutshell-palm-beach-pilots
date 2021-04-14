import React, { useState, useEffect } from 'react';
import { } from '../../modules/FriendsManager';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFriends } from "../../modules/FriendsManager";
import { Hint } from "react-autocomplete-hint";
import {getCurrentUser} from '../helper/helperFunctions';

export const FriendsForm = () =>{
    const [friendsList, setFriendsList] = useState([]);


    useEffect(() => {
        // getFriends(getCurrentUser())
        //     .then(userlist => {
        //         setFriendsList(userlist);
        //         return friendsList;
        //     })
    })

    return ``;
}