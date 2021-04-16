import React, { useState, useEffect } from "react";

import "../friends/friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles} from "../../modules/ArticlesManager";
// import { getCurrentUser } from '../helper/helperFunctions';
import { ArticleCard } from './ArticleCard'
// import { render } from '@testing-library/react';
import {getUsers} from '../../modules/FriendsManager'
import { useHistory } from "react-router";

export const ArticleForm = ({toEdit,articleToEdit,editOne,addOne, cancelAddEdit}) =>{ //creates and logic for entering and editing Articles

    const [article,setArticle] = useState({
        title: "",
        synopsis: "",
        url:"",
        timestamp: 0
    });
    const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newArticle = { ...article};
		
		let selectedVal = event.target.value;
		let targetId = event.target.id;
		let imageURL = "";
		// forms always provide values as strings. But we want to save the ids as numbers.
	}
    const editArticle = (e) =>{
        alert("edit article")
    }
    const addArticle = (e) =>{
        alert("add article")
    }
return(
    
    <div className="articlecard">
    <form className="articleForm">
        {toEdit === false &&(
            <h4>Enter Article</h4>
        )}
        {toEdit === true&&(
            <h4>Edit Article</h4>
        )
        }
        <fieldset>
            <div className="form-group">
                <label>Article:</label>
                <input type="text" it="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Title" value="" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Recap:</label>
                <textarea type="text" it="recap" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Recap" value=""/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Recap:</label>
                <input type="text" it="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Link to Article" value=""/>
            </div>
        </fieldset>
        <div className="friend_section">
        {toEdit === false &&(
            <a href="#" id="edit__"{...article.id} className="friendBtn btn_otherColor" onClick={addArticle} >Save Article</a>
        )}
        {toEdit === true&&(
            <a href="#" id="upd__"{...article.id} className="friendBtn btn_otherColor" onClick={()=>{editOne(1)}}>Update Article</a>
        )
        }    
            <a href="#" id="cancel__"{...article.id} className="friendBtn btn_Cancel"  onClick={()=>{cancelAddEdit()}}>Cancel</a>

        </div>
    </form>
</div>)
//

}