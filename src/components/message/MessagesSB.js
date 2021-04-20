
import React, { useState, useEffect } from 'react';
import { getMessageByUser, getMessageByPublic, getMessagesByRecieved } from "../../modules/MessageManager";
import { useHistory } from "react-router";
export const MessagesSB = () =>{

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [messages, setMessages] = useState([]);
    const history = useHistory();
    const [userMessages, setUserMessages] = useState([]);
    const [publicMessages, setPublicMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const goto = () =>{
        history.push("/messages")
    }
    const combineFilterAndParseArrays = () => {

        // Combine all of the above arrays into one single array.
        const combinedArray = [...userMessages, ...publicMessages, ...receivedMessages]
        // For every message object in the array, remove duplicates.
        let completeMessages = combinedArray.filter((message, index, array) =>
            index === array.findIndex((element) => (
                element.id === message.id
            ))
        )
        // Sort the array.
        completeMessages.sort((messageA, messageB) => {
            return messageB.timestamp - messageA.timestamp
        });
        // Set the messages with the filted array.

        setMessages(completeMessages);
        //
        return messages
    }

    const getAndSetMessages = () => {
    return getMessageByUser(currentUser).then(
        function (response) {
            setUserMessages(response)
            return response;
        }).then((data) => {
            return getMessageByPublic()
        }).then((data) => {
            setPublicMessages(data)
            return getMessagesByRecieved(currentUser)
                .then((data) => {
                    setReceivedMessages(data)
                })
        })
    }

useEffect(() => {
    getAndSetMessages();
}, []);

useEffect(() => {
    combineFilterAndParseArrays();
}, [receivedMessages])



return (
    <div onClick={goto}>
    <h4>My Friends</h4>
    <hr></hr>
    {messages.map(message => {
         return <div className="card" key={message.id}>
         <div className="friendName">{message.user.name}</div>
         <div className="messaageText">{message.messagetxt}</div>
         
      </div>
    })}
    
    <hr></hr>
</div>

)




}