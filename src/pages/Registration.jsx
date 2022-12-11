import React, { useState } from 'react';

export default function UserRegistration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input values
    if (password !== passwordConfirm) {
      alert('The password and password confirmation do not match.');
      return;
    }

    // Parse the input values
    const data = {
      username,
      password,
    };

    // Send the data to the API as a POST request
    fetch('https://localhost:3000/api/users/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(result => {
      // Handle the API response
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <label htmlFor="passwordConfirm">Confirm Password:</label>
      <input
        id="passwordConfirm"
        type="password"
        value={passwordConfirm}
        onChange={e => setPasswordConfirm(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}