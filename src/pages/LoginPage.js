import React from 'react';

//Man kan godt gemme username i en pseudo global variable, så længe man exporter og importer
//Username skal hentes fra alle pages, da det bliver brugt til at lave request på API fra user side
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        Username: props.Username,
        Password: props.Password
      }
    }
  }

  //const username = this.state.user.Username;

  handleUsernameChanged(event) {
    var user        = this.state.user;
    user.Username  = event.target.value;

    this.setState({ user: user });
  }

  handlePasswordChanged(event) {
    var user      = this.state.user;
    user.Password = event.target.value;

    this.setState({ user: user });
  }


  handleButtonClicked() {
    // Construct the request body with the form data
    const requestBody = {
      Username: this.state.user.Username,
      Password: this.state.user.Password
    };

    // Send the POST request to the API endpoint
    fetch('https://Localhost:3000/api/users/login', {
      method: 'POST',
      //Body skal være username og password, ligesom i RegistrationPage
      body: JSON.stringify(requestBody),
      headers: {
        //Authentication goes here
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that may have occurred
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <label>
          Username: 
        </label>
        <input type="text" 
        value={this.state.user.Username} 
        onChange={this.handleUsernameChanged.bind(this)}/>
        <br/>
        <label>
          Password:
        </label>
        <input type="text" 
        value={this.state.user.Password} 
        onChange={this.handlePasswordChanged.bind(this)}/>
        <br/>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Login
        </button>
      </div>
    );
  }
}