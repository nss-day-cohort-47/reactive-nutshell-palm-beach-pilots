// A component to display message entry form.
// Written by Colten M.
import { addMessage } from "../MessageManager"
import { useState } from "react"
import { useHistory } from "react-router";

// userId will be sessionStorage.getItem("nutshell_user")
export const MessageForm = () => {
    const [message, setMessage] = useState({
        messagetxt: "", 
        userId: parseInt(sessionStorage.getItem("nutshell_user")), 
        friendId:0
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    //* Function that handles changes to the form.
    const handleControlledInputChange = (e) => {
        // Create a new message with the modified animal.
        const newMessage = {...message};
        // Create a variable to hold the selected value.
        let selectedValue = e.target.value;
        // Assign that value to the object.
        newMessage[e.target.id] = selectedValue;
        // Set the message with the new object
        setMessage(newMessage);
    }

    //TODO pull friend id based on name of friend (conditional in handlecontrolledinputchange that looks for '@')
    //// const getFriendByName () 
    //TODO useEffects
    
    //* A function that saves the message object and posts it to the database.
    const handleClickPost = (e) => {
        // Prevent page from refreshing.
        e.preventDefault()

        addMessage(message)
            .then(() => history.push("/messages"))
    }

    //TODO INVOKE FUNCTION TO GET FRIEND BY NAME THEN RETURN ID
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <fieldset>
                <textarea type="textarea" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Say what you want..."/>
            </fieldset>
            <input type="hidden" name="userId" value={sessionStorage.getItem("nutshell_user")}></input>
            <button className="btn btn-primary"
                onClick={handleClickPost}>
                Send
            </button>
        </form>
    )
}