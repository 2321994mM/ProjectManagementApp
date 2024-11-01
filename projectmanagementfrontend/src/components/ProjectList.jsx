// src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const fetchProjects = async () => {
        const response = await axios.get('https://localhost:7137/api/projects');
        setProjects(response.data);
    };

    const handleDelete = async (projectId) => {
        await axios.delete(`https://localhost:7137/api/projects/${projectId}`);
        fetchProjects();
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleSave = () => {
        setShowForm(false);
        fetchProjects();
    };

    return (
        <div className="container mt-4">
            <h1>Project List</h1>
            {showForm ? (
                <ProjectForm project={editingProject} onSave={handleSave} onCancel={() => setShowForm(false)} />
            ) : (
                <button className="btn btn-primary mb-3" onClick={() => { setEditingProject(null); setShowForm(true); }}>Add Project</button>
            )}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Budget</th>
                        <th>Owner ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <ProjectItem key={project.projectId} project={project} onDelete={handleDelete} onEdit={() => { setEditingProject(project); setShowForm(true); }} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
