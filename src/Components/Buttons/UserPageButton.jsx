import React from 'react';
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function UserPageButton(){
    const url = 'user/'+localStorage.getItem('username');
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate(url)}>
                Your Page
            </button>
        </div>
    );
}

export default UserPageButton;