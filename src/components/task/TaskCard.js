import React from "react"
import { Link } from "react-router-dom";
import { parseDate } from "../helper/helperFunctions";

export const TaskCard = ({ task, clickCheckBox, deleteAndSetTasks }) => {
    let dateRegex = (/.+?:/);
    let completedDate = parseDate(task.completionDate).toString().match(dateRegex)[0].slice(0, -4)

    return (
        <>
            <section className="task d-flex justify-content-center">
                <fieldset className="task__row__A">
                    <h5 className="task__name">{task.name}</h5>
                    <input className="task__checkbox" type="checkbox" onClick={() => clickCheckBox(task.id)}></input>
                </fieldset>
                <small className="task__date">Due: {completedDate}</small>
                <br></br>
                <fieldset className="buttonBin">
                    <Link to={`/tasks/${task.id}/edit`}>
                        <button type="button"
                            className="friendBtn"
                        >Edit</button>
                    </Link>
                    <button type="button"
                        onClick={() => deleteAndSetTasks(task.id)}
                        className="btn_Cancel"
                    >Delete</button>
                </fieldset>
            </section>
            <br></br>
        </>
    )
}