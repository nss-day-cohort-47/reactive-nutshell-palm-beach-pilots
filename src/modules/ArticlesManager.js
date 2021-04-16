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

export const deleteArticle = (id) => {//method is the data deletion of articles data
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}



export const AddNewArticle = () =>{

}

export const EditArticle = (article) =>{ //method is the data update of articles data
    return fetch(`${remoteURL}/animals/${article.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
      }).then(data => data.json());
    }

