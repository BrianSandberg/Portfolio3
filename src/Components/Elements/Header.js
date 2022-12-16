import React, { useContext} from 'react'
import ThemeContext from '../ThemeContext'
import Container from '../StyledComponents/Container'
import Title from '../StyledComponents/Title'
import DarkmodeButton from '../StyledComponents/DarkmodeButton'
 

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    
    function handleThemeChange(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
        return (
            <>
                <Container color={theme}>
                <Title color={theme}>My Site</Title>
                <DarkmodeButton color={theme} onClick={handleThemeChange}>Darkmode</DarkmodeButton>
                </Container>
            </>
        )
    }
    
    export default Header