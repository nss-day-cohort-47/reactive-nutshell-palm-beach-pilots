import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {compareValues} from '../helper/helperFunctions';
import "../../components/Nutshell.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles, deleteArticle,AddNewArticle,updateArticle } from "../../modules/ArticlesManager";
import { ArticleCard } from './ArticleCard'
import { ArticleForm } from "./ArticleForm"
// import { render } from '@testing-library/react';
import { findAllByTestId } from "@testing-library/dom";

export const ArticlesList = () => {
    const [noForm, setNoForm] = useState(true);
    const [articles, setArticles] = useState([]);
    const [toEdit, setToEdit] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState({userId: 0,title:"",synopsis:"",url:"",timestamp:0});
    const handleDel = (id) => {  // handle the deletion of any Articles
        deleteArticle(id)
        .then(() => {getArticles().then(setArticles)});
    };
    const handleEdit = (article) => {  //Handle the edit function
        setArticleToEdit(article);
        setToEdit(true);
        setNoForm(false);
    }
    const addOne = (article) =>{
        article.timestamp = Date.now();
        AddNewArticle(article).then(() => {
            getArticles().then(setArticles).then(() =>{
                setNoForm(true);
                setToEdit(false);
            });
        });
    }
    const editOne = (article) => {
        article.timestamp = Date.now();
        updateArticle(article).then(()=>{
            getArticles().then(setArticles).then(() =>{
                setNoForm(true);
                setToEdit(false);
                setArticleToEdit({userId: 0,title:"",synopsis:"",url:"",timestamp:0});
            });
        });
    } 
    const getAllArticles = () => {
        return getArticles().then(FromAPI => {
            FromAPI.sort(compareValues("timestamp", 'desc'))
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
                                    articleToEdit={articleToEdit}
                                    editOne={editOne}
                                    addOne={addOne}
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
                                handleDel={handleDel} 
                                handleEdit={handleEdit}
                                />
                        )}
                    </div>
                </section>
            </div>

        </div>
    );
}
// </section> onClick={handleClick}
