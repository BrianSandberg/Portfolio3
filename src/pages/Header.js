import React, { useContext, useState} from 'react'
import ThemeContext from '../Components/ThemeContext'
import Container from '../Components/StyledComponents/Container'
import Title from '../Components/StyledComponents/Title'
import DarkmodeButton from '../Components/StyledComponents/DarkmodeButton'
import LoginButton from '../Components/Buttons/LoginButton'
import Logout from '../Components/Buttons/LogoutButton'
import RegisterButton from '../Components/Buttons/RegistrationButton'
import Userpage from './Users/Userpage'
import UserPageButton from '../Components/Buttons/UserPageButton'
 

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    const [isVisible, setIsVisible] = useState(false);
    
    function handleThemeChange(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    function handleButtonChange(){
        if(localStorage.getItem('token') != null && localStorage.getItem('username') != null){
            setIsVisible(false);
        }
        else{
            setIsVisible(true);
        }
    }
    //const isLoggedIn = localStorage.getItem('token') !== null && localStorage.getItem('username') !== null;
    
    //Sry hvis jeg fucker headeren up med mine "buttons" xD
        return (
            <>
                <Container color={theme}>
                <Title color={theme}>Movie Database Application</Title>
                {/*Skal vel have lavet "My Site" om til et link til ens userpage? */}
                {!isVisible && <LoginButton onClick={handleButtonChange}/>}
                {!isVisible && <RegisterButton />}
                {isVisible && <Logout onClick={handleButtonChange}/>}
                {isVisible && <UserPageButton />}
                <DarkmodeButton color={theme} onClick={handleThemeChange}>Darkmode</DarkmodeButton>
                </Container>
            </>
        )
    }
    
    export default Header