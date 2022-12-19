
// TEST STEEN
/*export default App;*/

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
lol remove this line, this is part of a test
*/

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Landing from "./pages/Landing";
import TitlesSearchResult from "./pages/Titles/TitlesSearchResult/TitlesSearchResult";
import PersonsSearchResult from "./pages/Persons/PersonsSearchResult/PersonsSearchResult";

import TitlePage from "./pages/Titles/TitlePage/TitlePage";
import PersonPage from "./pages/Persons/PersonPage/PersonPage";
import CoActorsPage from "./pages/Persons/CoActorsPage/CoActorsPage";
import SimilarTitlesPage from "./pages/Titles/SimilarTitlesPage.jsx/SimilarTitlesPage";
import Login from "./pages/Users/LoginPage";
import Userpage from "./pages/Users/Userpage";
import UserRegistrationPage from "./pages/Users/RegistrationPage";
import DeleteUser from "./pages/Users/DeleteUser";
import ChangePassword from "./pages/Users/ChangePassword";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Landing />} />

          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />

          {/* TITLES */}
          <Route path="/title/:id" element={<TitlePage/>} />
          <Route path="/title/:id/similartitles" element={<SimilarTitlesPage/>} />
          <Route path="/searchResults/titles/:searchTerm" element={<TitlesSearchResult />} />

          {/* PERSONS */}
          <Route path="/person/:id" element={<PersonPage/>} /> 
          <Route path="/searchResults/persons/:searchTerm" element={<PersonsSearchResult />} />
          <Route path="/person/:id/CoActors" element={<CoActorsPage/>} />


{/*Har muligvis ikke 100p styr på det her routing, men prøver at kigge lidt på det, og se om jeg ikke 
kan få sat det nogenlunde op, så de fleste url's virker */}
          {/* USERS */}
          <Route path='/users/:username' element={<Userpage/>} />
          <Route path="/users/register" element={<UserRegistrationPage/>} />
          <Route path="/users/login" element={<Login/>} />
          <Route path="/users/deleteuser" element={<DeleteUser/>} />
          <Route path="/users/updatepassword" element={<ChangePassword/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
