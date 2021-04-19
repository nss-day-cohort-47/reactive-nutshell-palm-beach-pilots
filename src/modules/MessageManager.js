// This module handles all message functionality tied to JSON server.
// Written by Colten M.

// Setting a static URL representation for JSON-Server To Use
const remoteURL = "http://localhost:8088";

//* Fetch a message from that database by id passed through.
export const getMessageById = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}`)
        .then(res => res.json())
};

//* Get all messages from the database.
//? Change later?
export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages/?_expand=user`)
        .then(res => res.json())
}
//?===============================================================================
//? What Messages Do We Need To Display Per Each User?
// All Messages A User Is Responsible For (userId)
export const getMessageByUser = (userId) => {
    return fetch(`${remoteURL}/messages/?userId=${userId}&_expand=user`)
        .then(res => res.json())
}

// All Public Messages //! Will Refactor To Only Show Friends Messages?
export const getMessageByPublic = () => {
    return fetch(`${remoteURL}/messages/?recepientId=0&_expand=user`)
        .then(res => res.json())
}

// All Messages Directed At The User (recipientId)
export const getMessagesByRecieved = (recipientId) => {
    return fetch(`${remoteURL}/messages/?recepientId=${recipientId}&_expand=user`)
        .then(res => res.json())
}
//?===============================================================================
//* Add a message to the database.
// With a message object.
export const addMessage = (newMessage) => {
    // Fetch access /message in the database
    return fetch(`${remoteURL}/messages`, {
        // Post the object.
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // With the newMessage object.
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}

//* A function to update an edited message.
export const updateMessage = (editedMessage) => {
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMessage)
    }).then(data => data.json());
}

//* Delete a message from the database.
export const deleteMessage = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}`, {
        method: "DELETE"
    }).then(res => res.json())
}