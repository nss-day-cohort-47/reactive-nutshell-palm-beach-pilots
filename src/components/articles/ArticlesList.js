import React, { useState, useEffect } from "react";

import "../friends/friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles} from "../../modules/ArticlesManager";
// import { getCurrentUser } from '../helper/helperFunctions';
import { ArticleCard } from './ArticleCard'
import {ArticleForm} from "./ArticleForm"
// import { render } from '@testing-library/react';
import {getUsers} from '../../modules/FriendsManager'
import { useHistory } from "react-router";

export const ArticlesList = () => {
    const [userNames, setuserNames] = useState([]);
    const [articles, setArticles] = useState([]);
    const [text, setText] = useState("");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    const handleDel = (id) => {  // handle the deletion of any Articles
        alert("Handle Delete Article");
        // deleteFriend(id)
        //     .then(() => {getFriends().then(setArticles)
        //         document.getElementById("enterFriendName").value =""});
    };
    const handleEdit = (id) =>{  //Handle the edit function
        alert("Handle Edit Article");

    }

    const getAllArticles = () =>{
        return getArticles().then(FromAPI =>{
            setArticles(FromAPI)
        });
    };
    const handleClick = (e) => {
        e.preventDefault();
        // const userId = document.getElementById("enterFriendName").value.split(' -- ')[1];
        // const addNewFriend = { "currentId": parseInt(getCurrentUser()), "userId": parseInt(userId) };
        // if(userId){
        // addFriend(addNewFriend)
        //     .then(() => {
        //         getFriends().then(data => {
        //             setFriendNames(data)
        //             history.push("/friends")
        //             document.getElementById("enterFriendName").value =""
        //         })
        //     })
        // }
    };

    // useEffect(() => {
    //     let id = parseInt(getCurrentUser());
    //     getUsers(id)
    //         .then(userlist => {
    //             let tmp = [];
    //             userlist.map((item) => {
    //                 tmp.push(item.name + " -- " + item.id.toString());
    //             })
    //             setuserNames(tmp);
    //         })
    // }, [])

    useEffect(() => {
        return getAllArticles().then(
            function(response){
                return response;
            })},[]); 
    return (
        <div>
            <section className="friends">
                <div>
                    <ArticleForm />
                    {/* <div className="clickbtn">
                        <Hint options={userNames} allowTabFill>
                            <input id="enterFriendName"
                                value={text}
                                onChange={e => setText(e.target.value)} />
                        </Hint>
                        <a href="#" className="friendBtn"  disabled={isLoading} onClick={handleClick}>Add a friend</a>
                    </div> */}
                </div>
                </section>
                <div className="card">
                    <section>
                        <div className="friend_section"><h6>Articles</h6></div>
                         <div className="articlecard">
                         {articles.map(article => 
                                <ArticleCard
                                key={article.id}
                                    article={article}
                                    handleDel={handleDel} 
                                    handleEdit={handleEdit}/>
                        
                        )}
                        </div>
                    </section>
                </div>
           
        </div>
    );
}
// </section> 
