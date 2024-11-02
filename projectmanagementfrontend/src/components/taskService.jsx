// src/services/taskService.js
import axios from 'axios';

const API_URL = 'https://localhost:7137/api/tasks';

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const updateTask = async (task) => {
    const response = await axios.put(`${API_URL}/${task.tasksId}`, task);
    return response.data;
};

export const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/${taskId}`);
};

