import React, { useContext, useState} from 'react'
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";


function LoginButton(isVisible, setIsVisible){
    //const[showButton, setShowButton] = useState(true);
    const loginurl = 'user/login';
    const navigate = useNavigate();
    //setIsVisible(true);

    return(
        <div>
            <button onClick={() => {navigate(loginurl, {isVisible: isVisible, setIsVisible: setIsVisible})}}>
                Sign in!
            </button>
        </div>
    );
}

export default LoginButton;