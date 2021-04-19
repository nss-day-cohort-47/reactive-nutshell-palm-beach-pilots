// A component to display message entry form.
// Written by Colten M.
import React, { useState, useEffect } from "react"
import { addMessage } from "../../modules/MessageManager"
import { getAllUsers } from "../../modules/UserManager"

// userId will be sessionStorage.getItem("nutshell_user"), aka the currentUser
export const MessageForm = (getAndSetMessages) => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const [users, setUsers] = useState([]);
    const [messageText, setMessageText] = useState("");

    const [message, setMessage] = useState({
        messagetxt: messageText,
        userId: currentUser,
        recepientId: 999,
        timestamp: Date.now()
    });

    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    //* Function that handles changes to the form.
    const handleControlledInputChange = (e) => {
        // Create a new message with the modified message.
        const newMessage = { ...message };
        // Create a variable to hold the selected value.
        setMessageText(e.target.value);

        //* Using regex, we fetch the string, only accessing the part of the string between the `@` and the next whitespace.
        //  First, we make sure there is an `@` preceding the string.
        if (messageText.startsWith(`@`)) {
            // We then define our regular expression.  In this case, we are looking for a string /after/ the `@` and /before/ a whitespace.
            let regularExpression = /(?<=\@)(.*?)(?=\s)/;
            // We then create a new variable to hold the value after we matched it with the RegEx
            let parsedName = messageText.match(regularExpression);
            // For our code to compile, we must not run any of the code within this if statement unless parsedName is no longer a null value.
            if (parsedName !== null) {
                // We are replacing the underscore from the input with a space, we are also "pulling out" the value, as it a single string held inside an array.
                parsedName = parsedName[0].replace(/_/g, ' ')
                // As we search through each user in our database...
                users.forEach(user => {
                    // If our parsedName matches a name of a user and that user's id is not the id of our logged in user...
                    if (parsedName === user.name && user.id !== currentUser) {
                        // We set the recepientId equal to the id of the user that fufills the requirements.
                        newMessage.recepientId = user.id;
                    }
                });
            }
        }

        // Assign that value to the object.
        newMessage[e.target.id] = messageText;

        // Set the message with the new object
        setMessage(newMessage);
    }

    //* A function that saves the message object and posts it to the database.
    const handleClickPost = (e) => {
        // Prevent page from refreshing.
        e.preventDefault()
        // Add a message to the database.
        addMessage(message)
            .then(() => {
                getAndSetMessages()
            })
    }

    return (
        <form className="messageForm">
            <fieldset>
                <textarea type="textarea" id="messagetxt" value={messageText} onChange={handleControlledInputChange} required />
            </fieldset>
            <input type="hidden" name="userId" value={currentUser}></input>
            <button className="btn btn-primary"
                onClick={handleClickPost}>
                Send
            </button>
            <button className="btn btn-primary"
                onClick={null}>
                Cancel
            </button>
        </form>
    )
}