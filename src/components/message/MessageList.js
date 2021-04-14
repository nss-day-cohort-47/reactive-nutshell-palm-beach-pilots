// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteMessage, getAllMessages } from "../../modules/MessageManager";
import { MessageCard } from './MessageCard';

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages().then(messagesFromAPI => {
            setMessages(messagesFromAPI);
        });
    };

    const deleteAndSetMessages = (messageId) => {
        console.log("messageId is", messageId)
        deleteMessage(messageId)
            .then(() => getAllMessages()
                .then(setMessages))
    }

    useEffect(() => {
        getMessages();
    }, []);

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