import React, { useState } from 'react';

const ChangePassword = () => {
  //const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [verifypassword, setVerifyPassword] = useState('');

  const ApiBase = 'http://localhost:5001/api/users/';
  const user = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  // Send the POST request to the API endpoint
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newpassword == verifypassword){
    fetch(ApiBase + user + '/updatepassword/' + password + '/' + newpassword, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        if (response.ok) {
          console.log(ApiBase + user + '/updatepassword/' + password + '/' + newpassword);
          return response.json();

        }
      })
      .then(data => window.location.href=`http://localhost:3000/users/${user}`)
      .catch(error => {
        console.error(error);
      })
    }
    else {
      return ('Passwords do not match!');
    }
  };


  return (
    <form onSubmit={handleSubmit}>

      <br />
      <label>
        Old password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        New password:
        <input
          type="password"
          value={newpassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Verify new password:
        <input
          type="password"
          value={verifypassword}
          onChange={(event) => setVerifyPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Change password</button>
    </form>
  );
};

export default ChangePassword;