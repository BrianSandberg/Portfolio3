import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

const DeleteUser = () => {

  //const username = this.state.user.Username;
  const navigate = useNavigate();


  const ApiBase = 'http://localhost:5001/api/users/';
  const user = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  const handleSubmit = async (event) => {

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

        onClick={() => {
          navigate("/user/:username");
        }}
      >
        No    </button>
    </Container>

  );
};

export default DeleteUser;