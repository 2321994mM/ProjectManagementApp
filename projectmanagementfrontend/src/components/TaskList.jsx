// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from './taskService';
import TaskForm from './TaskForm';
import { Button } from 'react-bootstrap';

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error('Failed to load tasks:', error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            loadTasks(); // Reload tasks after deletion
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    return (
        <div>
        <h2>Task List < /h2>
            < ul className = "list-group mt-3" >
            {
                tasks.map(task => (
                    <li key= { task.tasksId } className = "list-group-item d-flex justify-content-between align-items-center" >
                    <div>
                    <h5>{ task.tasksName } < /h5>
                    < p > { task.description } < /p>
                    < /div>
                    < div >
                    <Button variant="warning" onClick = {() => onEdit(task)}> Edit < /Button>
                        < Button variant = "danger" onClick = {() => handleDelete(task.tasksId)}> Delete < /Button>
                            < /div>
                            < /li>
                ))}
</ul>
    < /div>
    );
};

export default TaskList;
