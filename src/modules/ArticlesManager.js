import {getCurrentUser} from '../components/helper/helperFunctions'
const remoteURL = "http://localhost:8088";

export const getArticles = () =>{
    const id = parseInt(getCurrentUser());
    return fetch(`${remoteURL}/articles?userId=${id}`)
    .then(res => res.json())
    .then (artcles =>{
        let articleReturn=[];
        articleReturn = artcles.map(item =>{
            item.class = "owner";
            return item;
        })
        return articleReturn;
    })
}