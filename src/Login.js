// Login.js

import React, { useState } from 'react';
import users from './users';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username);
    if (!user || user.password !== password) {
      setError('Invalid username or password');
    } else {
      // Authentication successful
      console.log('Login successful!');
      // Add your code to handle successful login, such as updating authentication state, redirecting, etc.
    }
  };

  return (
    <div className = "login-container">
      <h2 className = "login-title">Login</h2>
      {error && <p className="error">{error}</p>}
      <form className = "login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
