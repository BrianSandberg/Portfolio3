import React, { useContext} from 'react'
import ThemeContext from '../Components/ThemeContext'
import Container from '../Components/StyledComponents/Container'
import Title from '../Components/StyledComponents/Title'
import DarkmodeButton from '../Components/StyledComponents/DarkmodeButton'
import Login from '../Components/Buttons/LoginButton'
import logout from '../Components/Buttons/LogoutButton'
 

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    
    function handleThemeChange(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    //Sry hvis jeg fucker headeren up med mine "buttons" xD
        return (
            <>
                <Container color={theme}>
                <Title color={theme}>My Site</Title>
                {Login()}
                {logout()}
                <DarkmodeButton color={theme} onClick={handleThemeChange}>Darkmode</DarkmodeButton>
                </Container>
            </>
        )
    }
    
    export default Header