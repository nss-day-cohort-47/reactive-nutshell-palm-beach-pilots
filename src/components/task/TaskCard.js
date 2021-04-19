import React from "react"
import { Link } from "react-router-dom";
import { parseDate } from "../helper/helperFunctions";

export const TaskCard = ({ task, clickCheckBox, deleteAndSetTasks }) => {
    let dateRegex = (/.+?:/);
    let completedDate = parseDate(task.completionDate).toString().match(dateRegex)[0].slice(0, -4)

    return (
        <>
            <section className="task">
                <h5 className="task__name">{task.name}</h5>
                <small className="task__date">Due: {completedDate}</small>
                <input type="checkbox" onClick={() => clickCheckBox(task.id)}></input>
                <br></br>
                <Link to={`/tasks/${task.id}/edit`}>
                    <button type="button">Edit</button>
                </Link>
                <button type="button" onClick={() => deleteAndSetTasks(task.id)}>Delete</button>
            </section>
            <br></br>
        </>
    )
}