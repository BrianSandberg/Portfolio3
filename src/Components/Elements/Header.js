import React, { useContext} from 'react'
import ThemeContext from '../ThemeContext'
import Container from '../StyledComponents/Container'
import Title from '../StyledComponents/Title'
import DarkmodeButton from '../StyledComponents/DarkmodeButton'
import Button from '../StyledComponents/Button'
import Footer from './Footer'
 

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    
    function handleThemeChange(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
        return (
            <>
                <Container color={theme}>
                <Title color={theme}>My Site</Title>
                <Button color={theme} onClick={handleThemeChange}>Darkmode</Button>
                </Container>
            </>
        )
    }
    
    export default Header