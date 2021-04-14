const remoteURL = "http://localhost:8088";

export const getUsers = (id) =>{
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
    .then (users =>{
        let userReturn=[];
        users.forEach(item =>{
            userReturn.push(item.name);
        })
        return userReturn;
    })
}
export const getArticles = () =>{

}

export const getFriends = (id) =>{
    return fetch(`${remoteURL}/friends?currentId=${id}&_expand=user`)
    .then(res => res.json())
}

export const addFriend =(curId,friendId) =>{

}

export const deleteFriend = (curId, friendId) =>{
    
}