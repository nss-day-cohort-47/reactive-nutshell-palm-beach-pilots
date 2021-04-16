// Written by Colten
const remoteURL = "http://localhost:8088";

//* Fetch tasks from the database only for the current user.
export const getTasksByUser = (userId) => {
    return fetch(`${remoteURL}/tasks/?userId=${userId}`)
        .then(res => res.json())
};

export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}