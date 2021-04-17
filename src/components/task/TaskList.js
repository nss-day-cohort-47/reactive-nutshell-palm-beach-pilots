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
                setTasks(tasksFromAPI)
            });
    };

    const deleteAndSetTasks = (id) => {
        deleteTask(id)
            .then(() => getTasks().then(setTasks))
    };

    const clickCheckBox = (id) => {
        getTaskById(id)
            .then((retrievedTask => {
                if (retrievedTask.completed === true){
                    retrievedTask.completed = false;
                } else {
                    retrievedTask.completed = true;
                }
                updateTask(retrievedTask);
            }))
    };

    useEffect(() => {
        getTasks(currentUser);
    }, [])

    return (

        <>
            <div className="container-cards">
                {tasks.map(task => <TaskCard
                    key={task.id}
                    task={task}
                    clickCheckBox={clickCheckBox}
                    deleteAndSetTasks={deleteAndSetTasks} />)}
            </div>
            <section className="section-content">
                <button type="button"
                    onClick={null}>Add Task</button>
            </section>
        </>
    );
}