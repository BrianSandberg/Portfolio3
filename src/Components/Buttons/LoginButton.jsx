import React from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function LoginButton(){
    //const[status, setStatus] = (true);
    const loginurl = 'user/login';
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate(loginurl)}>
                Login
            </button>
        </div>
    );
}

export default LoginButton;