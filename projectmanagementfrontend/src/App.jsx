import React from 'react';
import SimpleApiCall from './components/SimpleApiCall';

function App() {
    return (
            <div className="app-container">

            <SimpleApiCall />
        </div>
    );
}

export default App;
// src/App.jsx
//import React, { useState } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
//import NavbarComponent from './components/NavbarComponent';
//import TaskList from './components/TaskList';
//import TaskForm from './components/TaskForm';

//function App() {
//    const [showModal, setShowModal] = useState(false);
//    const [taskToEdit, setTaskToEdit] = useState(null);

//    const handleShowModal = () => setShowModal(true);
//    const handleCloseModal = () => {
//        setShowModal(false);
//        setTaskToEdit(null);
//    };

//    return (
//        <Router>
//            <NavbarComponent />
//            <div className="app-container">
//                <TaskList onEdit={(task) => {
//                    setTaskToEdit(task);
//                    handleShowModal();
//                }} />
//                <TaskForm
//                    show={showModal}
//                    handleClose={handleCloseModal}
//                    taskToEdit={taskToEdit}
//                />
//            </div>
//        </Router>
//    );
//}

//export default App;
