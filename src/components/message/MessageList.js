// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteMessage, getMessageByUser, getMessageByPublic, getMessagesByRecieved } from "../../modules/MessageManager";
import { MessageCard } from './MessageCard';
import { MessageForm } from './MessageForm';

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [messages, setMessages] = useState([]);

    const [userMessages, setUserMessages] = useState([]);
    const [publicMessages, setPublicMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);

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
    }, [messages]);

    useEffect(() => {
        combineFilterAndParseArrays();
    }, [receivedMessages])

    const deleteAndSetMessages = (messageId) => {
        deleteMessage(messageId)
            .then(getAndSetMessages)
    }

    return (
        <>
            <div>{messages.map(message => <MessageCard
                key={message.id}
                message={message}
                deleteAndSetMessages={deleteAndSetMessages} />)}
            </div>
            <MessageForm
                getAndSetMessages={getAndSetMessages} />
        </>
    )
}