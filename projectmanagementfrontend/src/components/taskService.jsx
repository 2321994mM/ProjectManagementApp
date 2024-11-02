// src/services/taskService.js
const API_URL = 'https://localhost:7137/api/tasks';

export const getTasks = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
};

export const updateTask = async (taskId, task) => {
    const response = await fetch(`${API_URL}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
};

export const deleteTask = async (taskId) => {
    const response = await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
};
