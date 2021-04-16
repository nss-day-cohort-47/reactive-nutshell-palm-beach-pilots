import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteTask, getTasksByUser } from '../../modules/TaskManager.js';
import { TaskCard } from '../task/TaskCard.js'

export const TaskList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [tasks, setTasks] = useState([]);
    const history = useHistory();

    const getTasks = (currentUser) => {
        return getTasksByUser(currentUser)
            .then(tasksFromAPI => {
                setTasks(tasksFromAPI)
            });
    };

    const deleteAndSetTasks = (id) => {
        deleteTask(id)
            .then(() => getTasks().then(setTasks))
    };

    useEffect(() => {
        getTasks();
    }, [])

    console.log(tasks)

    return (
        <>
            <div className="container-cards">
                {tasks.map(task => <TaskCard
                    key={task.id}
                    task={task}
                    deleteAndSetTasks={deleteAndSetTasks} />)}
            </div>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={null}>Add Task</button>
            </section>
        </>
    );
}