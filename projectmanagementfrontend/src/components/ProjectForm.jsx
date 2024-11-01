// src/components/ProjectForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
        budget: 0,
        ownerId: 0,
        status: ''
    });

    useEffect(() => {
        if (project) {
            setFormData({
                projectName: project.projectName,
                description: project.description,
                startDate: project.startDate.split('T')[0],
                endDate: project.endDate ? project.endDate.split('T')[0] : '',
                budget: project.budget,
                ownerId: project.ownerId,
                status: project.status
            });
        }
    }, [project]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (project) {
            await axios.put(`https://localhost:7137/api/projects/${project.projectId}`, formData);
        } else {
            await axios.post('https://localhost:7137/api/projects', formData);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 mb-3 bg-light">
            <h4>{project ? 'Edit Project' : 'Add Project'}</h4>
            <div className="mb-3">
                <input type="text" className="form-control" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project Name" required />
            </div>
            <div className="mb-3">
                <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            </div>
            <div className="mb-3">
                <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input type="date" className="form-control" name="endDate" value={formData.endDate} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" required />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" name="ownerId" value={formData.ownerId} onChange={handleChange} placeholder="Owner ID" required />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name="status" value={formData.status} onChange={handleChange} placeholder="Status" required />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ProjectForm;
