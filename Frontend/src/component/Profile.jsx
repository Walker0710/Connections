import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'
import pic from '../assets/profile.jpeg';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser(response.data);
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  const winPer = (user.wins / (user.completed)) * 100;

  return (
    <div className='profile-all'>
      <img className='profile-background' src={pic} alt="back" />
      <div className='profile-back-color'></div>
      <div className='profile-upper'>
        <h1 className='profile-heading'>Statistics</h1>
        <div className='profile-content'>
          <div className='profile-user'>
            <h1 className='profile-username'>{user.username}</h1>
            <p className='profile-email'>{user.email}</p>
          </div>
          <div className='profile-stats'>
            <p className='profile-stats-detail'>Completed : {user.completed}</p>
            <p className='profile-stats-detail'>Win Percentage : {winPer.toFixed(2)}%</p>
            <p className='profile-stats-detail'>Streak : {user.streak}</p>
            <p className='profile-stats-detail'>Max Streak : {user.maxStreak}</p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default Profile;
