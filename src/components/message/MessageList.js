// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteMessage, getAllMessages, getMessageByUser, getMessageByPublic, getMessagesByRecieved } from "../../modules/MessageManager";
import { MessageCard } from './MessageCard';

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [userMessages, setUserMessages] = useState([]);
    const [publicMessages, setPublicMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);

    const [messages, setMessages] = useState([]);

    const history = useHistory();

    // Get User Messages
    useEffect(() => {
        getMessageByUser(currentUser)
            .then(userMessagesFromAPI => {
                setUserMessages(userMessagesFromAPI)
                console.log("userMessages", userMessagesFromAPI);
            })
    }, []);

    // Get Public Messages
    useEffect(() => {
        getMessageByPublic()
            .then(publicMessagesFromAPI => {
                setPublicMessages(publicMessagesFromAPI)
                console.log("publicMessages", publicMessagesFromAPI);
            })
    }, []);

    // Get Recieved Messages
    useEffect(() => {
        getMessagesByRecieved(currentUser)
            .then(recievedMessagesFromAPI => {
                setReceivedMessages(recievedMessagesFromAPI)
                console.log("recievedMessages", recievedMessagesFromAPI);
            })
    }, []);

    const deleteAndSetMessages = (messageId) => {
        deleteMessage(messageId)
            .then(() => getAllMessages()
                .then(setMessages))
    }

    useEffect(() => {
        const combinedArray = [...userMessages, ...publicMessages, ...receivedMessages]

        let completeMessages = combinedArray.filter((message, index, array) =>
            index === array.findIndex((element) => (
                element.id === message.id
            ))
        )

        setMessages(completeMessages);
        console.log(messages)
    }, [userMessages, publicMessages, receivedMessages]);

    return (
        <>
            <button type="button"
                onClick={() => { history.push("/messages/post") }}>Post A New Message</button>
            <div>{messages.map(message => <MessageCard
                key={message.id}
                message={message}
                deleteAndSetMessages={deleteAndSetMessages} />)}
            </div>
        </>
    )
}