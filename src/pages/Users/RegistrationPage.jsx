import React from 'react';

export default class UserRegistrationPage extends React.Component {
  /*  state = {
      username: "",
      password: "",
      passwordVerification: ""
    };*/
  constructor(props) {
    super(props);

    this.state = {
      user: {
        Username: props.Username,
        Password: props.Password,
        PasswordVerification: props.PasswordVerification
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // Validate password
    if (this.state.password !== this.state.passwordVerification) {
      // Return an error when password and verifypassword does not match
      return;
    }
    const requestBody = {
      //Request body skal hedde {"username": "userinput", "password":"passwordinput"}
      username: this.state.username,
      password: this.state.password
    };
    console.log(requestBody);
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
        // Resonse from the server - Skal lige finde ud af om requesten er afhængig af response her
      })
      .catch(error => {
        // Handle any errors that occur
        console.log(error.message);
      });

    console.log(this.state.username);
    console.log(JSON.stringify(requestBody));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password, passwordVerification } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Verify Password:
          <input
            type="password"
            name="passwordVerification"
            value={passwordVerification}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}