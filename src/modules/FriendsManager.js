import {getCurrentUser} from '../components/helper/helperFunctions'
const remoteURL = "http://localhost:8088";

export const getUsers = (id) =>{
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
    .then (users =>{
        let userReturn=[];
        users.forEach(item =>{
            if(item.id !== parseInt(id)) userReturn.push({name:item.name, id: item.id});
        })
        return userReturn;
    })
}
export const getArticles = () =>{

}

export const getFriends = () =>{
    let id = parseInt(getCurrentUser());
    return fetch(`${remoteURL}/friends?currentId=${id}&_expand=user`)
    .then(res => res.json())
}

// export const addFriend =(curId,friendId) =>{

// }

//* Delete a friend connection from the database.
export const deleteFriend = (friendId) => {
    return fetch(`${remoteURL}/friends/${friendId}`, {
        method: "DELETE"
    }).then(res => res.json())
}

//* Add a friend to the database.
export const addFriend = async (friend) => {
    
    return fetch(`${remoteURL}/friends`, {
        // Post the object.
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // With the newMessage object.
        body: JSON.stringify(friend)
    }).then(res => res.json())
}