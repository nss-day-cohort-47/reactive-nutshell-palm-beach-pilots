import React from "react"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, clickCheckBox, deleteAndSetTasks }) => {

    return (
        <section className="task">
            <h4 className="task__name">{task.name}</h4>
            <input type="checkbox" onClick={() => clickCheckBox(task.id)}></input>
            <input type="date"></input>
            <Link to={`/tasks/${task.id}/edit`}>
                <button type="button">Edit</button>
            </Link>
            <button type="button" onClick={() => deleteAndSetTasks(task.id)}>Delete</button>
        </section>
    )
}