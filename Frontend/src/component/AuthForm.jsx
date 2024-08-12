import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/${type}`, { username, password });
            if (type === 'login') {
                localStorage.setItem('token', response.data.token);
                onLogin();
            }
            setMessage('Success');
        } catch (error) {
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AuthForm;
