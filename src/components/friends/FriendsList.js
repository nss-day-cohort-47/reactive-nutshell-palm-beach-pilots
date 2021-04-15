import React, { useState, useEffect } from "react";

import "./friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers, getFriends, addFriend, deleteFriend } from "../../modules/FriendsManager";
import { Hint } from "react-autocomplete-hint";
import { getCurrentUser } from '../helper/helperFunctions';
import { FriendsCard } from './FriendsCard'
import { render } from '@testing-library/react';
import { useHistory } from "react-router";

export const FriendsList = () => {
    const [userNames, setuserNames] = useState([]);
    const [friendNames, setFriendNames] = useState([]);
    const [text, setText] = useState("");
    const history = useHistory();

    const handleDel = (id) => {
        deleteFriend(id)
            .then(() => getFriends().then(setFriendNames));
    };

    const getAllFriends = () =>{
        return getFriends().then( friendsFromAPI =>{
            setFriendNames(friendsFromAPI)
        });
    };
    const handleClick = (e) => {
        alert("Click")
        e.preventDefault();
        const userId = document.getElementById("enterFriendName").value.split(' -- ')[1];
        const addNewFriend = { "currentId": parseInt(getCurrentUser()), "userId": parseInt(userId) };
        addFriend(addNewFriend)
            .then(() => {
                getFriends().then(data => {
                    setFriendNames(data)
                    history.push("/friends")
                })
            })
    };

    useEffect(() => {
        getUsers()
            .then(userlist => {
                let tmp = [];
                userlist.map((item) => {
                    tmp.push(item.name + " -- " + item.id.toString());
                })
                setuserNames(tmp);
            })
    }, [])

    useEffect(() => {
        getAllFriends().then(fl =>{
            let tmp =[];
            if(fl){
            if(Array.isArray(fl)){
                setFriendNames(fl);
            }else{
                tmp.push(fl);
                setFriendNames(tmp);
            }
        }
        })
    }, []);
    return (
        <div>
            <section className="friends">
                <div>
                    <div className="clickbtn">
                        <Hint options={userNames} allowTabFill>
                            <input id="enterFriendName"
                                value={text}
                                onChange={e => setText(e.target.value)} />
                        </Hint>
                        <a href="#" className="friendBtn" onClick={handleClick}>Add a friend</a>
                    </div>
                </div>
                <div className="card">
                    <section>
                        <div className="friend_section"><h5>My Friends</h5></div>
                         <div>
                        {friendNames.map(friend => 
                       
                                <FriendsCard
                                key={friend.id}
                                    friend={friend}
                                    handleDel={handleDel} />
                        
                        )}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
