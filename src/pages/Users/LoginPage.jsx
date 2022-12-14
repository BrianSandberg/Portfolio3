import React, { useState, useEffect } from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


//Skal måske laves lidt om, så det er sin egen side, istedet for et fast component i header...
function Login ({isVisible, setIsVisible}) {
  //const {isVisible, setIsVisible} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  
  const navi = () => {
    navigate('/');
  }
  // Send the POST request to the API endpoint
  const handleLogin = async (event) => {
    event.preventDefault();
    fetch('http://localhost:5001/api/users/login', {
      method: 'POST',
      //Body skal være username og password, ligesom i RegistrationPage
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        localStorage.setItem('username', data.username);
        localStorage.setItem('token', data.token);
        setIsVisible("loggedin");
        //console.log(isVisible);
        navi();

      })
      .catch(error => {
        // Handle any errors that may have occurred
        console.error(error.message);
      })
  };


  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;