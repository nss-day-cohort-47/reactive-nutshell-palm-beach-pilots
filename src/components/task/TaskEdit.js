import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { getTaskById, updateTask } from "../../modules/TaskManager";


export const TaskEditForm = () => {
    const [task, setTask] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const { taskId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange)
    }

    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedTask = {
            id: task.id,
            userId: task.userId,
            name: task.name,
            dateCreated: task.dateCreated,
            completed : false,
            completionDate: task.completionDate
        }

        updateTask(editedTask)
            .then(() => history.push("/tasks"))
    }

    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task)
                setIsLoading(false)
            });
    }, [])

    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="name">Task Name</label>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={task.name}
                        />

                        <label htmlFor="completionDate">Task Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="completionDate"
                            value={task.completionDate}
                        />
                    </div>
                </fieldset>
                    <div className="">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingTask}
                            className="friendBtn"
                        >Update</button>
                    </div>
                    <div className="">
                        <button
                            type="button" disabled={isLoading}
                            onClick={() => history.push("/tasks")}
                            className="btn_Cancel"
                        >Cancel</button>
                    </div>
            </form>
        </>
    );
}
