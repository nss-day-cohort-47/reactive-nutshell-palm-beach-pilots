import { getCurrentUser,compareValues } from '../components/helper/helperFunctions'
const remoteURL = "http://localhost:8088";

export const getArticles = () => {
    const id = parseInt(getCurrentUser());
    let retArray = [];
    return fetch(`${remoteURL}/articles?userId=${id}`)
        .then(res => res.json())
        .then(artcles => {
            retArray = artcles.map(item => {
                item.who = "owner";
                return item;
            });
            return retArray;
        }).then(owner => {
            return fetch(`${remoteURL}/friends?currentId=${parseInt(getCurrentUser())}&_expand=user`)
                .then(res => res.json())
                .then(response => {
                    let tmp = [];
                    tmp = response.map(item => {
                        return item.user.id;
                    });
                    return tmp;
                }).then(friends => {
                    let qs = "?userId="
                    friends.forEach((id, index) => {
                        if (index === 0) {
                            qs += id.toString();
                        } else {
                            qs += `&userId=${id.toString()}`
                        }
                    })
                    return fetch(`${remoteURL}/articles${qs}`)
                    .then(res => res.json())
                    .then(artcles => {
                        let tmp = artcles.map(item => {
                            item.who = "friend";
                            return item;
                        });
                        retArray = [...retArray,...tmp];
                        retArray.sort(compareValues("timestamp","desc"))
                        return retArray;
                    })
                })
        })
    }

export const deleteArticle = (id) => {//method is the data deletion of articles data
        return fetch(`${remoteURL}/articles/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    export const AddNewArticle = (article) => {
        return fetch(`${remoteURL}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        }).then(data => data.json());
    }

    export const updateArticle = (article) => { //method is the data update of articles data
        return fetch(`${remoteURL}/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        }).then(data => data.json());
    }

