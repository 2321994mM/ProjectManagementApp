// src/components/TaskItem.js
import React from 'react';
import { Button } from 'react-bootstrap';

const TaskItem = ({ task, onEdit, onDelete }) => {
    return (
        <tr key={task.tasksId}>
            <td>{task.tasksName}</td>
            <td>{task.description}</td>
            <td>{task.assignedToId}</td>
            <td>{new Date(task.startDate).toLocaleDateString()}</td>
            <td>{task.endDate ? new Date(task.endDate).toLocaleDateString() : 'N/A'}</td>
            <td>{task.priority}</td>
            <td>{task.tasksStatusId}</td>
            <td>{task.projectId}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(task)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(task.tasksId)} className="ml-2">Delete</Button>
            </td>
        </tr>
    );
};

export default TaskItem;
