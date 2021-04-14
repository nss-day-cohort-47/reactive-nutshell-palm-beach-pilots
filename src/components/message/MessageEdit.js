import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getMessageById, updateMessage } from "../MessageManager";

export const MessageEdit = () => {
    const [message, setMessage] = useState({ messagetxt: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { messageId }  = useParams();

    const history = useHistory();

    const handleFieldChange = (e) => {
        const stateToChange = { ...message };
        stateToChange[e.target.id] = e.target.value;
        setMessage(stateToChange);
    }

    const updateExistingMessage = (e) => {
        e.preventDefault();
        setIsLoading(true)

        const editedMessage = {
            id: message.id,
            messagetxt: message.messagetxt,
            userId: message.userId,
            friendId: message.friendId
        }
    
        updateMessage(editedMessage)
            .then(() => history.push("/messages")
            )
    }


    useEffect(() => {
        getMessageById(messageId)
            .then(message => {
                setMessage(message);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <textarea   type="textarea"
                        required
                        onChange={handleFieldChange}
                        id="messagetxt"
                        value={message.messagetxt}/>
            <button
                type="button" disabled={isLoading}
                onClick={updateExistingMessage}
            >Submit</button>
        </>
    )
}