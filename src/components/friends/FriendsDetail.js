import React, { useState, useEffect } from 'react';
import { } from './modules/FriendsManager';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from "./modules/FriendsManager";
import { Hint } from "react-autocomplete-hint";


export const FriendsDetail = () => {
    const [userNames, setuserNames] = useState([]);
    const [text, setText] = useState("");

    //const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        console.log("add a Friend")
    };
    useEffect(() => {
        getUsers()
            .then(userlist => {
                setuserNames(userlist);
            })
    })


    return (
        <section className="friends">
            <div>
                <div className="clickbtn">
                    <a href="" className="btn btn-info" onClick={handleClick}>Add a friend</a>
                </div>
                <div className="clickbtn">
                    <Hint options={userNames} allowTabFill>
                        <input id="enterFriendName"
                            value={text}
                            onChange={e => setText(e.target.value)} />
                    </Hint>
                </div>
            </div>
        </section>
    );
}