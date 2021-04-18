import { useState } from "react"
import { useHistory } from "react-router";
import { addTask } from "../../modules/TaskManager";
import { getCurrentUser } from "../helper/helperFunctions"

export const TaskForm = () => {
    const [task, setTask] = useState({
        name: "",
        userId: getCurrentUser(),
        dateCreated: Date.now(),
        completionDate: "",
        completed: false
    })

    const history = useHistory();

    // Anytime a change occurs in the form, this function executes...
    const handleControlledInputChange = (event) => {
        // Create a new task with the modified task.
        const newTask = { ...task };
        // Create a variable to hold the selected value.
        let selectedValue = event.target.value;
        console.log(selectedValue)
        // Addes the id as the selectedValue as a key to the newTask object.
        newTask[event.target.id] = selectedValue;

        setTask(newTask)
    }

    const handleClickSaveAnimal = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
            addTask(task)
                .then(() => history.push("/tasks"))

    }

    return (
        <>
            <form className="taskForm">
                <input  type="text"
                        id="name"
                        required
                        value={task.name}
                        placeholder="Task..."
                        onChange={handleControlledInputChange}></input>
                <input  type="date"
                        id="completionDate"
                        required
                        value={task.completionDate}
                        onChange={handleControlledInputChange}></input>
                <button onClick={handleClickSaveAnimal}
                        >Add</button>
                <button onClick={() => history.push("/tasks")}
                        >Cancel</button>
            </form>
        </>
    )
}