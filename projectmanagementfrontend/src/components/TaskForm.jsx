// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from './taskService';
import { Button, Modal, Form } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, taskToEdit, loadTasks }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTaskName(taskToEdit.tasksName);
            setDescription(taskToEdit.description);
            setStartDate(taskToEdit.startDate);
            setEndDate(taskToEdit.endDate);
            setPriority(taskToEdit.priority);
        } else {
            setTaskName('');
            setDescription('');
            setStartDate('');
            setEndDate('');
            setPriority('');
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { tasksName: taskName, description, startDate, endDate, priority };
        try {
            if (taskToEdit) {
                await updateTask(taskToEdit.tasksId, taskData);
            } else {
                await createTask(taskData);
            }
            loadTasks(); // Reload tasks after create/update
            handleClose();
        } catch (error) {
            console.error('Failed to save task:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Create Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="taskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="priority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {taskToEdit ? 'Update Task' : 'Create Task'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskForm;
