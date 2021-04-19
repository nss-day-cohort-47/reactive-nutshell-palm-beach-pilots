const remoteURL = "http://localhost:8088";

//* Get all users from the database.
export const getAllUsers = () => {
    return fetch(`${remoteURL}/users/`)
    .then(res => res.json())
}
