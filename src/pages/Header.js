import React, { useContext, useState} from 'react'
import ThemeContext from '../Components/ThemeContext'
import Container from '../Components/StyledComponents/Container'
import Title from '../Components/StyledComponents/Title'
import DarkmodeButton from '../Components/StyledComponents/DarkmodeButton'
import LoginButton from '../Components/Buttons/LoginButton'
import logout from '../Components/Buttons/LogoutButton'
import RegisterButton from '../Components/Buttons/RegistrationButton'
 

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    
    function handleThemeChange(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const isLoggedIn = localStorage.getItem('token') !== null && 
    localStorage.getItem('username') !== null;
    
    //Sry hvis jeg fucker headeren up med mine "buttons" xD
        return (
            <>
                <Container color={theme}>
                <Title color={theme}>My Site</Title>
                {/*Skal vel have lavet "My Site" om til et link til ens userpage? */}
                {!isLoggedIn && <LoginButton />}
                {!isLoggedIn && <RegisterButton />}
                {isLoggedIn && logout()}
                <DarkmodeButton color={theme} onClick={handleThemeChange}>Darkmode</DarkmodeButton>
                </Container>
            </>
        )
    }
    
    export default Header