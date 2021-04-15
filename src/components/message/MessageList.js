// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteMessage, getAllMessages, getMessageByUser, getMessageByPublic, getMessagesByRecieved } from "../../modules/MessageManager";
import { MessageCard } from './MessageCard';

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    //!=========================================================================================
    //!=====================================REFACTOR BELOW======================================
    //!=========================================================================================

    const [userMessages, setUserMessages] = useState([]);
    const [publicMessages, setPublicMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);

    // Get messages that ONLY the user has written.
    useEffect(() => {
        getMessageByUser(currentUser)
            .then(userMessagesFromAPI => {
                setUserMessages(userMessagesFromAPI)
            })
    }, []);

    // Get messages that everyone has written, as long as they are public.
    useEffect(() => {
        getMessageByPublic()
            .then(publicMessagesFromAPI => {
                setPublicMessages(publicMessagesFromAPI)
            })
    }, []);

    // Get get messages that ONLY the user has recieved.
    useEffect(() => {
        getMessagesByRecieved(currentUser)
            .then(recievedMessagesFromAPI => {
                setReceivedMessages(recievedMessagesFromAPI)
            })
    }, []);

    useEffect(() => {
        // Combine all of the above arrays into one single array.
        const combinedArray = [...userMessages, ...publicMessages, ...receivedMessages]

        // For every message object in the array, remove duplicates.
        let completeMessages = combinedArray.filter((message, index, array) =>
            index === array.findIndex((element) => (
                element.id === message.id
            ))
        )

        // Set the messages with the filted array.
        setMessages(completeMessages);

        // Watch for changes for each message type.
    }, [userMessages, publicMessages, receivedMessages]);

    //!=========================================================================================
    //!=====================================REFACTOR ABOVE======================================
    //!=========================================================================================

    const deleteAndSetMessages = (messageId) => {
        deleteMessage(messageId)
            .then(() => getAllMessages()
                .then(setMessages))
    }
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