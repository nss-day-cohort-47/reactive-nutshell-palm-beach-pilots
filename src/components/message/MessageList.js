// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllMessages } from "../MessageManager";
import { MessageCard } from './MessageCard';

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages().then(messagesFromAPI => {
            setMessages(messagesFromAPI);
        });
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
            <button type="button"
                onClick={() => { history.push("/messages/post") }}>Post A New Message</button>
            <div>{messages.map(message => <MessageCard
                key={message.id}
                message={message} />)}
            </div>
        </>
    )
}