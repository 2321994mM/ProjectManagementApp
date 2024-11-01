// src/components/ProjectItem.js
import React from 'react';

const ProjectItem = ({ project, onDelete, onEdit }) => {
    return (
        <tr>
            <td>{project.projectName}</td>
            <td>{project.description}</td>
            <td>{new Date(project.startDate).toLocaleDateString()}</td>
            <td>{project.endDate ? new Date(project.endDate).toLocaleDateString() : 'N/A'}</td>
            <td>{project.budget}</td>
            <td>{project.ownerId}</td>
            <td>{project.status}</td>
            <td>
                <button className="btn btn-warning btn-sm me-1" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(project.projectId)}>Delete</button>
            </td>
        </tr>
    );
};

export default ProjectItem;
