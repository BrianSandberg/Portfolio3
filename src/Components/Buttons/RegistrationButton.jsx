import React from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function RegisterButton(){
    const url = 'user/register'
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate(url)}>
                Register
            </button>
        </div>
    );
}

export default RegisterButton;