import React, { useState, useEffect } from 'react';



//Man kan godt gemme username i en pseudo global variable, så længe man exporter og importer
//Username skal hentes fra alle pages, da det bliver brugt til at lave request på API fra user side
const DeleteUser = () => {
  //const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setVerifyPassword] = useState('');

  //const username = this.state.user.Username;



  const ApiBase = 'http://localhost:5001/api/users/';
  const user = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  //const login = UserActions();
  //login(this.state.user.Username, this.state.user.Password);
  //setError('apiError', {message: error})


  // Send the POST request to the API endpoint
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password == verifypassword){
    fetch(ApiBase + user + '/delete/' + password, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        if (response.ok) {
          
        }
      })
      .then(data => console.log(data))
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
        <p>
          Delete you user?
        </p>
      <br />
      <label>
        Confirm with password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Verify password:
        <input
          type="password"
          value={verifypassword}
          onChange={(event) => setVerifyPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Delete User</button>
    </form>
  );
};

export default DeleteUser;