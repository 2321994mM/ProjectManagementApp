// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, handleSubmit, currentTask }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [assignedToId, setAssignedToId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('');
    const [tasksStatusId, setTasksStatusId] = useState('');
    const [projectId, setProjectId] = useState('');

    useEffect(() => {
        if (currentTask) {
            setTaskName(currentTask.tasksName);
            setDescription(currentTask.description);
            setAssignedToId(currentTask.assignedToId || '');
            setStartDate(currentTask.startDate ? currentTask.startDate.split('T')[0] : '');
            setEndDate(currentTask.endDate ? currentTask.endDate.split('T')[0] : '');
            setPriority(currentTask.priority || '');
            setTasksStatusId(currentTask.tasksStatusId || '');
            setProjectId(currentTask.projectId || '');
        } else {
            setTaskName('');
            setDescription('');
            setAssignedToId('');
            setStartDate('');
            setEndDate('');
            setPriority('');
            setTasksStatusId('');
            setProjectId('');
        }
    }, [currentTask]);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            tasksName: taskName,
            description,
            assignedToId: assignedToId ? parseInt(assignedToId) : null,
            startDate,
            endDate: endDate ? new Date(endDate) : null,
            priority,
            tasksStatusId: tasksStatusId ? parseInt(tasksStatusId) : null,
            projectId: projectId ? parseInt(projectId) : null,
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentTask ? 'Edit Task' : 'Add New Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formTaskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAssignedToId">
                        <Form.Label>Assigned To (User ID)</Form.Label>
                        <Form.Control
                            type="number"
                            value={assignedToId}
                            onChange={(e) => setAssignedToId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStartDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEndDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTasksStatusId">
                        <Form.Label>Status ID</Form.Label>
                        <Form.Control
                            type="number"
                            value={tasksStatusId}
                            onChange={(e) => setTasksStatusId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formProjectId">
                        <Form.Label>Project ID</Form.Label>
                        <Form.Control
                            type="number"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {currentTask ? 'Update Task' : 'Add Task'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskForm;
