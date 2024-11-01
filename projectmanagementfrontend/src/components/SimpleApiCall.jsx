import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SimpleApiCall = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7137/api/Simple/projects');
                setData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {data.map(item => (
                    <li key={item.ProjectId}>{item.ProjectName}</li>
                ))}
            </ul>
        </div>
    );
};

export default SimpleApiCall;
