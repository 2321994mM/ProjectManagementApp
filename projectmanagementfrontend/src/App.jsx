import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import ProjectList from './components/SimpleApiCall';
import Tasks from './components/TaskList';
import AuthPage from './components/AuthPage';

const App = () => {
    const [userRole, setUserRole] = useState(''); // Initialize userRole as an empty string

    const handleLogin = (role) => {
        console.log(role)
        setUserRole(role == 1 ? 'manager' :'employee'); // Set user role based on the login response
    };

    return (
        <Router>
            <div style={{
                padding: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                color: '#333'
            }}>
                <h1>Dashboard</h1>

                <Routes>
                    <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
                    <Route path="/" element={userRole ? (
                        <div>
                            {userRole === 'manager' && (
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/projects">
                                        <button style={{
                                            margin: '10px',
                                            background: '#FAEBD7',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            border: 'none',
                                            borderRadius: '5px'
                                        }}>Go to Projects</button>
                                    </Link>
                                    <Link to="/tasks">
                                        <button style={{
                                            margin: '10px',
                                            background: '#FAEBD7',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            border: 'none',
                                            borderRadius: '5px'
                                        }}>Go to Tasks</button>
                                    </Link>
                                </div>
                            )}
                            {userRole === 'employee' && (
                                <Link to="/tasks">
                                    <button style={{
                                        margin: '10px',
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        background: '#FAEBD7',
                                        border: 'none',
                                        borderRadius: '5px'
                                    }}>Go to Tasks</button>
                                </Link>
                            )}
                        </div>
                    ) : (
                        <Navigate to="/login" />
                    )} />
                    <Route path="/projects" element={userRole === 'manager' ? <ProjectList /> : <Navigate to="/login" />} />
                    <Route path="/tasks" element={userRole ? <Tasks /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
