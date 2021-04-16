import React, { useState, useEffect } from "react";

import "../friends/friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles} from "../../modules/ArticlesManager";
// import { getCurrentUser } from '../helper/helperFunctions';
import { ArticleCard } from './ArticleCard'
// import { render } from '@testing-library/react';
import {getUsers} from '../../modules/FriendsManager'
import { useHistory } from "react-router";

export const ArticleForm = () =>{ //creates and logic for entering and editing Articles

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

		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		//newAnimal[targetId] = selectedVal
		// update state
		//setAnimal(newAnimal)
	}

return(
    <div  className="articlecard" >
    <form className="articleForm">
        <h3>Enter Article</h3>
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
            <a href="#" id="edit__"{...article.id} className="friendBtn btn_otherColor">Save Article</a>
            <a href="#" id="upd__"{...article.id} className="friendBtn btn_otherColor">Update Article</a>
            <a href="#" id="cancel__"{...article.id} className="friendBtn btn_Cancel" >Cancel</a>

        </div>
    </form>
</div>)
// onClick={() => handleEdit(article.id)} onClick={() => handleDel(article.id)} 

}