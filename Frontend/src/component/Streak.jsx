import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Streak = () => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post('https://synapse-backend-nv7c.onrender.com/update-streak', {}, {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(response => {
                setStreak(response.data.streak);
            }).catch(error => {
                console.error('Error fetching streak:', error);
            });
        }
    }, []);

    return (
        <div>
            <h2>Your Streak: {streak} days</h2>
        </div>
    );
};

export default Streak;
