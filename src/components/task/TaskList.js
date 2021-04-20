import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteTask, getTaskById, getTasksByUser, updateTask } from '../../modules/TaskManager.js';
import { TaskCard } from '../task/TaskCard.js'

export const TaskList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [tasks, setTasks] = useState([]);
    const history = useHistory();

    const getTasks = (currentUser) => {
        return getTasksByUser(currentUser).then(tasksFromAPI => {
                let filteredTasks = tasksFromAPI.filter(task => task.completed === false)
                setTasks(filteredTasks)
            });
    };

    const deleteAndSetTasks = (id) => {
        deleteTask(id)
            .then(() => getTasks(currentUser))
    };
    
    const clickCheckBox = (id) => {
        getTaskById(id)
            .then((retrievedTask => {
                if (retrievedTask.completed === true){
                    retrievedTask.completed = false;
                } else {
                    retrievedTask.completed = true;
                }
                updateTask(retrievedTask).then(() => getTasks(currentUser))
            }))
    };

    useEffect(() => {
        getTasks(currentUser)
    }, [])

    return (
        <>
            <div className="container-cards">
                {
                tasks.map(task =>
                <TaskCard
                    key={task.id}
                    task={task}
                    clickCheckBox={clickCheckBox}
                    deleteAndSetTasks={deleteAndSetTasks} />)
                }
            </div>
            <section className="taskButtonContent">
                <button type="button" className="friendBtn" onClick={() => history.push("/tasks/add")}>Add Task</button>
            </section>
        </>
    );
}