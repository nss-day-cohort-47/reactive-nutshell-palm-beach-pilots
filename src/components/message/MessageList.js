import React, { useState, useEffect } from 'react';
import { getAllMessages } from "../../modules/MessageManager";

export const MessageList = () => {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        return getAllMessages().then(messagesFromAPI => {
            setMessages(messagesFromAPI);
        });
    };

    // const deleteAndSetOwners = (id) => {
    //     deleteOwner(id)
    //         .then(() => getAllOwners().then(setOwners))
    // }

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
            {messages.map(message => <div id='{message.id}'>{message.message}<br></br>Sent By {message.user.name}<br></br><br></br></div>)}
        </>
    );
}