import React, { useState, useEffect } from "react";

import "../friends/friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles } from "../../modules/ArticlesManager";
// import { getCurrentUser } from '../helper/helperFunctions';
import { ArticleCard } from './ArticleCard'
import { ArticleForm } from "./ArticleForm"
// import { render } from '@testing-library/react';
import { getUsers } from '../../modules/FriendsManager'
import { useHistory } from "react-router";
import { findAllByTestId } from "@testing-library/dom";

export const ArticlesList = () => {
    const [noForm, setNoForm] = useState(true);
    const [articles, setArticles] = useState([]);
    const [toEdit, setToEdit] = useState(false);
    const articleToEdit = {userId: 0,title:"",synopsis:"",url:"",timestamp:0}
    const handleDel = (id) => {  // handle the deletion of any Articles
        alert("delete from articles list")
    };
    const handleEdit = (id) => {  //Handle the edit function
        setToEdit(true);
        setNoForm(false);
    }
    const editOne = (article) => {
        alert(JSON(article));
    } 
    const getAllArticles = () => {
        return getArticles().then(FromAPI => {
            setArticles(FromAPI)
        });
    };
    const cancelAddEdit = () =>{
        setNoForm(true);
        setToEdit(false);
    }
    const handleClick = (e) => {
        e.preventDefault();
        setNoForm(false);
        setToEdit(false);
    };

    useEffect(() => {
        return getAllArticles().then(
            function (response) {
                return response;
            })
    }, []);
    return (
        <div>
            <section className="friends">
                <div>
                    {noForm === false && (
                        <ArticleForm key={1}
                                    toEdit={toEdit}
                                    articleToEdit={editOne}
                                    cancelAddEdit={cancelAddEdit}
                                    />
                    )}
                    {noForm === true && (
                    <div className="clickbtn">
                        <a href="#" className="friendBtn" onClick={handleClick}  >Add Article</a>
                    </div> 
                    )}
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
                                editOne={editOne} 
                                />

                        )}
                    </div>
                </section>
            </div>

        </div>
    );
}
// </section> onClick={handleClick}
