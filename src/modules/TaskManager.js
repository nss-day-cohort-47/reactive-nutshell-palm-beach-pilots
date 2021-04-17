// Written by Colten
const remoteURL = "http://localhost:8088";

//* Fetch tasks from the database only for the current user.
export const getTasksByUser = (userId) => {
    return fetch(`${remoteURL}/tasks/?userId=${userId}`)
        .then(res => res.json())
};

export const getTaskById = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`)
    .then(res => res.json())
}

export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const updateTask = (editedTask) => {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTask)
    }).then(data => data.json());
}