import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getMessageById, updateMessage } from "../../modules/MessageManager";

export const MessageEdit = () => {
    const [message, setMessage] = useState({ messagetxt: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { messageId } = useParams();

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
            recepientId: message.recepientId
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
            <form className="messageForm">
                <fieldset>
                    <textarea type="textarea"
                        required
                        onChange={handleFieldChange}
                        id="messagetxt"
                        value={message.messagetxt} />
                </fieldset>
                <button
                    className="friendBtn"
                    type="button" disabled={isLoading}
                    onClick={updateExistingMessage}
                >Submit</button>
                <button
                    className="btn_Cancel"
                    type="button" disabled={isLoading}
                    onClick={() => history.push('/messages')}
                >Cancel</button>
            </form>
        </>
    )
}