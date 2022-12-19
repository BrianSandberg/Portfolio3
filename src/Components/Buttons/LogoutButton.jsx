import React from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function Logout() {

  const navigate = useNavigate();

  return (
    <button

      //Removes the users jwt token and their username, from the localstorage
      onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate("/");
      }}
    >
      Logout    </button>
  );
}


export default Logout;