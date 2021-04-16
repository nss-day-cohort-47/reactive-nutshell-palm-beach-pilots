import React from "react"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, deleteAndSetTasks}) => {
    <section className="task">
    <div className="task__name">{task.name}</div>
    <Link to={`/animals/${task.id}/edit`}>
        <button type="button">Edit</button>
    </Link>
    <button type="button" onClick={() => deleteAndSetTasks(task.id)}>Delete</button>
</section>
}