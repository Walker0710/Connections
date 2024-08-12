import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/game');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login-all'>
      <h2 className='login-heading'>Login with email</h2>
      <p className='login-content'>Enter the email address associated with your account</p>
      <form className='login-form' onSubmit={handleLogin}>
        <div className='login-email-all'>
          <label className='login-email-heading'>Your email</label>
          <input
            className='login-email-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='login-email-all'>
          <label className='login-email-heading'>Password</label>
          <input
            className='login-email-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button className='login-button' type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Login;
