import React, { useState, useEffect } from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


/*export default class UserRegistrationPage extends React.Component {
  /*  state = {
      username: "",
      password: "",
      passwordVerification: ""
    };
  constructor(props) {
    super(props);

    this.state = {
      user: {
        Username: props.Username,
        Password: props.Password,
        PasswordVerification: props.PasswordVerification
      }
    }
  }*/
  const RegistrationPage = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setVerifyPassword] = useState('');
    const navigate = useNavigate();

    const navi = () => {
      navigate('user/login');
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate password
    if (password !== verifypassword) {
      // Return an error when password and verifypassword does not match
      return ('Passwords does not match');
    }
    const requestBody = {
      //Request body skal hedde {"username": "userinput", "password":"passwordinput"}
      username: username,
      password: password
    };
    //console.log(requestBody);
    // Submit the form values to the server
    //Needs the chrome extension called "allow-control-allow-origin"
    fetch("http://localhost:5001/api/users/register", {

      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      //{"authentication": "token"},
      //Skal sende username og password med requesten
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        console.log(response.headers);
        //navigate("/")
        // Resonse from the server - Skal lige finde ud af om requesten er afhængig af response her
      })
      .then(data => {navi()})
      .catch(error => {
        // Handle any errors that occur
        console.log(error.message);
      });

  };



  return(
    
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        </label>
        <label>
          Verify Password:
          <input
            type="password"
            name="passwordVerification"
            value={verifypassword}
            onChange={(event) => setVerifyPassword(event.target.value)}
            />
        </label>
        <button type="submit" onClick={navigate('/')}>Sign up</button>
      </form>
    );
  };

export default RegistrationPage;