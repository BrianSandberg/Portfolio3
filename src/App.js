/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// TEST STEEN
export default App;*/

//Import React from "react";

/*
import React from 'react';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status
      }
    }
  }

  handleFirstNameChanged(event) {
    var customer        = this.state.customer;
    customer.firstName  = event.target.value;

    this.setState({ customer: customer });
  }

  handleLastNameChanged(event) {
    var customer      = this.state.customer;
    customer.lastName = event.target.value;

    this.setState({ customer: customer });
  }

  handleStatusChanged(event) {
    var customer    = this.state.customer;
    customer.status = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>
        <label>
          First Name: 
        </label>
        <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
        <br/>
        <label>
          Last Name:
        </label>
        <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
        <br/>
        <label>
          Status:
        </label>
        <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
          <option value="PENDING">
            Pending
          </option>
          <option value="APPROVED">
            Approved
          </option>
        </select>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
      </div>
    );
  } //asdasdasdasdasdas 
}
*/


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css"
//asasddsaasd
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
