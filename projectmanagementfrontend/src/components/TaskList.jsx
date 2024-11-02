// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, addTask, updateTask } from './taskService';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { Button, Table } from 'react-bootstrap';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

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
            loadTasks();
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const handleShow = (task = null) => {
        setCurrentTask(task);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentTask(null);
    };

    const handleSubmit = async (taskData) => {
        if (currentTask) {
            try {
                await updateTask({ ...currentTask, ...taskData });
                loadTasks();
            } catch (error) {
                console.error('Failed to update task:', error);
            }
        } else {
            try {
                await addTask(taskData);
                loadTasks();
            } catch (error) {
                console.error('Failed to add task:', error);
            }
        }
        handleClose();
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Task List</h2>
            <Button variant="primary" onClick={() => handleShow()}>Add New Task</Button>
            <Table striped bordered hover responsive="lg" className="mt-3" style={{ fontSize: '1.2rem' }}>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Assigned To ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Priority</th>
                        <th>Status ID</th>
                        <th>Project ID</th>
                        <th style={{ width: '150px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskItem key={task.tasksId} task={task} onEdit={handleShow} onDelete={handleDelete} />
                    ))}
                </tbody>
            </Table>

            <TaskForm
                show={showModal}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                currentTask={currentTask}
            />
        </div>
    );
};

export default TaskList;
