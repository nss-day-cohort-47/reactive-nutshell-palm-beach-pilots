import React from "react";
import "../friends/friends.css";
export const ArticleCard = ({ article, handleDel }) => {
  return (
      <div className="article_section">
        <section>
            <div>{article.title}</div>
            <div>{article.synopsis}</div>
            <p><a href={article.url}  target="_blank" rel="noopener noreferrer">Article Link</a></p>
        </section>
      </div> 
 )
}