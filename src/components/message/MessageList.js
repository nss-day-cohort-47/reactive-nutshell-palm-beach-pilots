// A component to display (currently all) messages to DOM.
// Written by Colten M.

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllMessages } from "../MessageManager";

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
                    onClick={() => { history.push("/messages/post")}}>Post A New Message</button>
            {messages.map(message => (
            
            <div    key={message.id}
                    id={message.id}>
                        {message.message}
                        <br></br>
                        Sent By {message.user.name}
                        <br></br>
                        <button>Edit--This Does Nothing</button>
                        <button>Delete--This Does Nothing</button>
                        <br></br>
                        <br></br>
            </div>))}
        </>
    );
}