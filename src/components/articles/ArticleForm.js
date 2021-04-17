import React, { useState, useEffect } from "react";
import "../friends/friends.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCurrentUser } from '../helper/helperFunctions';


export const ArticleForm = ({toEdit,articleToEdit,editOne,addOne, cancelAddEdit}) =>{ //creates and logic for entering and editing Articles
    
    const [article, setArticle] = useState({
        userId: getCurrentUser(),
        title: "",
        synopsis: "",
        url: "",
        timestamp: ""
      });
    const handleControlledInputChange =(e) => {
      const newArticle = { ...article};
      let selectedVal = e.target.value;
      newArticle[e.target.id] = selectedVal;
      setArticle(newArticle);
    }
    useEffect(() => {
        return setArticle(articleToEdit);
    }, []);
 
    const editArticle = (e) =>{
        let goodToGo = true;

        if(goodToGo && toEdit){   // if all expected fields are there then create object and push update to db
            editOne(article);
        }
    }
    
    const addArticle = (e) =>{
        let goodToGo = true;
        if(document.getElementById("title").value.length < 1){
            goodToGo = false;
             window.alert("Please enter a title")
        }
        if(document.getElementById("synopsis").value.length < 1){
            goodToGo = false;
             window.alert("Please enter a synopsis")
        }
        if(document.getElementById("url").value.length < 1){
            goodToGo = false;
             window.alert("Please enter a url")
        }
        if(goodToGo){   // if all expected fields are there then create object and push to db
            article.userId = getCurrentUser();
            addOne(article);
        }
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
                <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Title" value={article.title}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Recap:</label>
                <textarea type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Recap" value={article.synopsis}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Recap:</label>
                <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Link to Article"  value={article.url}/>
            </div>
        </fieldset>
        <div className="friend_section">
        {toEdit === false &&(
            <a href="#" id="edit__"{...article.id} className="friendBtn btn_otherColor" onClick={addArticle}  >Save Article</a>
        )}
        {toEdit === true&&(
            <a href="#" id="upd__"{...article.id} className="friendBtn btn_otherColor" onClick={editArticle}>Update Article</a>
        )
        }    
            <a href="#" id="cancel__"{...article.id} className="friendBtn btn_Cancel" onClick={()=>{cancelAddEdit()}}>Cancel</a>

        </div>
    </form>
</div>)
//

}