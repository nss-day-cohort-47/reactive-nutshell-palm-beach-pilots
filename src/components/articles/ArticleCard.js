import React from "react";
import "../friends/friends.css";
export const ArticleCard = ({ article, handleDel, handleEdit }) => {
  return (
      <div className="article_section">
        <section>
            <div className="div_article__name">{article.title}</div>
            <div>{article.synopsis}</div>
            <div className="articleButtons">
            <p><a href={article.url}  target="_blank" rel="noopener noreferrer">Article Link</a></p>
            <a href="#" id="edit__"{...article.id} className="friendBtn btn_otherColor" onClick={() => handleEdit(article.id)} >Edit Article</a>
            <a href="#" id="delete__"{...article.id} className="friendBtn btn_otherColor" onClick={() => handleDel(article.id)} > Delete Article</a>


            </div>
        </section>
      </div> 
 )
}