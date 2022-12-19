import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

//Man kan godt gemme username i en pseudo global variable, så længe man exporter og importer
//Username skal hentes fra alle pages, da det bliver brugt til at lave request på API fra user side
const DeleteUser = () => {
  //const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setVerifyPassword] = useState('');

  //const username = this.state.user.Username;
  const navigate = useNavigate();


  const ApiBase = 'http://localhost:5001/api/users/';
  const user = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  //const login = UserActions();
  //login(this.state.user.Username, this.state.user.Password);
  //setError('apiError', {message: error})


  // Send the POST request to the API endpoint
  const handleSubmit = async (event) => {
    //event.preventDefault();


    fetch(ApiBase + user + '/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        console.log(user);
      })
      .then(data => navigate('/'))
      .catch(error => {
        console.error(error);
      })
  };


  return (
    <Container>
      <p>Delete your profile?</p>
      <br></br>
      <button

        //Removes the users jwt token and their username, from the localstorage
        onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          navigate("/");
          handleSubmit();
        }}
      >
        Yes    </button>
      <button

        //Removes the users jwt token and their username, from the localstorage
        onClick={() => {
          navigate("/user/:username");
        }}
      >
        No    </button>
    </Container>

  );
};

export default DeleteUser;