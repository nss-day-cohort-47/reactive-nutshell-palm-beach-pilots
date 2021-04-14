import React from "react"
import { Link } from "react-router-dom";

export const MessageCard = ({ message, deleteAndSetMessages }) => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    return (
        <section className="message">
            <br></br>
            <p>{message.messagetxt}</p>
            <small>From {message.user.name}</small>
            <br></br>
            {message.userId === currentUser ?
                <>
                    <Link to={`/messages/${message.id}/edit`}>
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button" onClick={() => deleteAndSetMessages(message.id)}>Delete</button>
                </>
                : null
            }
        </section>
    )
}