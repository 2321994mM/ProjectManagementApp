import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('https://localhost:7137/api/auth/login', {
                username: username,
                passwordHash: password,
            });

            console.log("Response data:", response.data); // Log the response data for debugging

            if (response.status === 200) {


                // Assuming response contains a roleId
                onLogin(response.data.roleId); // Ensure that response.data.roleId exists
                navigate('/'); // Redirect after successful login
            }
        } catch (error) {
            console.error("Error during login:", error);

            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('Invalid username or password');
                } else {
                    setErrorMessage('An error occurred. Please try again later.');
                }
            } else if (error.request) {
                setErrorMessage('Network error. Please check your connection.');
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Login</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthPage;
