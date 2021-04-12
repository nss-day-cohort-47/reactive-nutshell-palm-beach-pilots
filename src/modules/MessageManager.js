// This module handles all message functionality tied to JSON server.
// Written by Colten M.

// Setting a static URL representation for JSON-Server To Use
const remoteURL = "http://localhost:8088";

// Fetch a message from that database by id passed through.
export const getMessageById = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}?_expand=friend`)
        .then(res => res.json())
};

// Get all messages from the database.
//? Change later?
export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages/?_expand=user&_expand=friend`)
    .then(res => res.json())
}