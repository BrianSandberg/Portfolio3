import React from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function DeleteUserButton(){
    const url = '/user/deleteuser'
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate(url)}>
                Delete Profile
            </button>
        </div>
    );
}

export default DeleteUserButton;