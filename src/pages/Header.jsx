import React, { useContext, useState, useEffect } from 'react'
import ThemeContext from '../Components/ThemeContext'
import Container from '../Components/StyledComponents/Container'
import Title from '../Components/StyledComponents/Title'
import DarkmodeButton from '../Components/StyledComponents/DarkmodeButton'
import LoginButton from '../Components/Buttons/LoginButton'
import Logout from '../Components/Buttons/LogoutButton'
import RegisterButton from '../Components/Buttons/RegistrationButton'
import Userpage from './Users/Userpage'
import UserPageButton from '../Components/Buttons/UserPageButton'
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";
import Login from './Users/LoginPage';
import RegistrationPage from './Users/RegistrationPage'



function Header() {

    const { theme, setTheme } = useContext(ThemeContext)
    const [isVisible, setIsVisible] = useState("");

    const navigate = useNavigate();

    function handleThemeChange() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    //Sry hvis jeg fucker headeren up med mine "buttons" xD
    return (
        <>
            <Container color={theme}>
                <Title color={theme}>Movie Database Application</Title>
                {/*Skal vel have lavet "My Site" om til et link til ens userpage? */}
                {loginComp()}
                {registerComp()}
                {signInButton()}
                {registerButton()}
                {userpageButton()}
                {logoutButton()}


                <DarkmodeButton color={theme} onClick={handleThemeChange}>Darkmode</DarkmodeButton>
            </Container>
        </>
    )

    function registerButton() {
        console.log("registerButton " + isVisible );
        if (isVisible == "" || isVisible == "loggingin") {
            return (
                <button onClick={() => { setIsVisible("registering") }}>
                    Register
                </button>
            )
        }
        else {
            return null;
        }
    }

    function signInButton() {
      
        console.log("signInButton " + isVisible);
        if (isVisible == "" || isVisible == "registering") {
            return (
                <div>
                    <button onClick={() => { setIsVisible("loggingin") }}>
                        Sign in!
                    </button>
                </div>
            )
        }
        else {
            return null;
        }
    }

    function userpageButton() {
        console.log("userpageButton " + isVisible);
        if (isVisible == "loggedin") {
            return (
                <div>
                    <button onClick={() => navigate('user/' + localStorage.getItem('username'))}>
                        Your Page
                    </button>
                </div>
            )
        }
        else {
            return null;
        }
    }

    function logoutButton() {
        console.log("LOGOUTBUTTON " + isVisible);
        if (isVisible == "loggedin") {
            return (
                <div>
                    <button

                        //Removes the users jwt token and their username, from the localstorage
                        onClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('username');
                            setIsVisible("");
                            navigate("/");
                        }}
                    >
                        Logout    </button>
                </div>
            )
        }
        else {
            return null;
        }
    }

    function loginComp() {
        console.log("loginComp " + isVisible);
        if (isVisible == "loggingin") {
            return (
                <div>
                    <Login isVisible={isVisible} setIsVisible={setIsVisible}></Login>
                </div>
            )
        }
        else {
            return null;
        }
    }

    function registerComp() {
        console.log("registerComp " + isVisible);
        if (isVisible == "registering") {
            return (
                <div>
                    <RegistrationPage isVisible={isVisible} setIsVisible={setIsVisible}></RegistrationPage>
                </div>
            )
        }
        else {
            return null;
        }
    }

   

    function checkState() {
        if (localStorage.getItem('token') !== null && localStorage.getItem('username') !== null) {
            setIsVisible("loggedin");
        }
        else {
            setIsVisible("");
        }
    }
}

export default Header