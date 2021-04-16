// A component to display (currently all) messages to DOM.
// Written by Colten M.

import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteMessage, getMessageByUser, getMessageByPublic, getMessagesByRecieved } from "../../modules/MessageManager";
import { MessageCard } from './MessageCard';

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const [userMessages, setUserMessages] = useState([]);
    const [publicMessages, setPublicMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [renderFlag, setRenderFlag] = useState(false);

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

    // Will check the local variable
    setInterval(function countUp() {
        setRenderFlag(window.localStorage.getItem("re-render flag"))
        if(refresh){
            setRefresh(false)
        } else {
            setRefresh(true)
        }
    }, 10000)

    useEffect(() => {
        if (renderFlag){
        getAndSetMessages();
        window.localStorage.setItem("re-render flag", false)
        }
    }, [refresh]);

    useEffect(() => {
        getAndSetMessages();
    }, []);

    useEffect(() => {
        combineFilterAndParseArrays();
    }, [receivedMessages])

    const deleteAndSetMessages = (messageId) => {
        deleteMessage(messageId)
            .then(getAndSetMessages)
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