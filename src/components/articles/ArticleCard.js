import React, { useState} from "react";
import "../friends/friends.css";
export const ArticleCard = ({ article, handleDel, handleEdit }) => {
    const [test, setTest] = useState(true);
    return (
        <div>
        {article.who === "owner" && (//if the article is by user then  style it article_owner and add edit and delete buttons
        <div className="article_owner">
            <section>
                <div className="div_article__name">{article.title}</div>
                <div>{article.synopsis}</div>
                <div className="articleButtons">
                    <p><a href={article.url} target="_blank" rel="noopener noreferrer">Article Link</a></p>
                    <div className="friend_section">
                        <a href="#" id="edit__"{...article.id} className="friendBtn btn_otherColor" onClick={() => handleEdit(article)} >Edit Article</a>
                        <a href="#" id="delete__"{...article.id} className="friendBtn btn_Cancel" onClick={() => handleDel(article.id)} > Delete Article</a>
                    </div>
                </div>
            </section>
        </div>
        )
    }
            {article.who === "friend" && (//if the article is by a friend then  style it article_friend and remove edit and delete buttons
        <div className="article_friend">
            <section>
                <div className="div_article__name">{article.title}</div>
                <div>{article.synopsis}</div>
                <div className="articleButtons">
                    <p><a href={article.url} target="_blank" rel="noopener noreferrer">Article Link</a></p>
                    <div className="friend_section">
                    </div>
                </div>
            </section>
        </div>
        )
    }
</div>
    )
}