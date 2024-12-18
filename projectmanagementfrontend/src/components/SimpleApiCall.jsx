// src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';
import { Modal, Button } from 'react-bootstrap';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
        setShowModal(false);
        fetchProjects();
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Welcome to the Project Management App</h1>
            <h2 className="text-center text-secondary mb-4">Project List</h2>
            <Button variant="primary" className="mb-3" onClick={() => { setEditingProject(null); handleShow(); }}>
                Add Project
            </Button>

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
                        <ProjectItem key={project.projectId} project={project} onDelete={handleDelete} onEdit={() => { setEditingProject(project); handleShow(); }} />
                    ))}
                </tbody>
            </table>

            {/* Modal for Project Form */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProject ? 'Edit Project' : 'Add Project'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectForm project={editingProject} onSave={handleSave} onCancel={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProjectList;
