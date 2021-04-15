import React from "react";
import "./friends.css";
export const FriendsCard = ({ friend, handleDel }) => {
  return (
      <div  className="friendslist" >{friend.user.name} <a href="#" id={friend.id} className="friendBtn" onClick={() => handleDel(friend.id)} > remove friend</a></div> 

  );
}
//onClick={handleDel(friend.id)}
// <li className="friendslist" key={friend.id}>{friend.user.name} <a href="" id={friend.id} className="friendBtn" onClick={handleDeleteFriend(friend.id)} > remove friend</a></li>    <button type="button" onClick={handleDeleteFriend(friend.id)}>Discharge</button>