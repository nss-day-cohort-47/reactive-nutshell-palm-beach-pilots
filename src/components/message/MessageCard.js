import React from "react"
import { Link } from "react-router-dom";

export const MessageCard = ({ message }) => (
    <section className="message">
        <br></br>
        <p>{message.messagetxt}</p>
        <small>From {message.user.name}</small>
        <br></br>
        {message.userId === parseInt(sessionStorage.getItem("nutshell_user")) ?
        <>
            <Link to={`/messages/${message.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button>Delete</button>
        </>
        :   null 
        }
    </section>
)