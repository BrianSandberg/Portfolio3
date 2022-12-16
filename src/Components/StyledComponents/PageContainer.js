import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.color === 'light' ? 'whitesmoke' : '#202020'}};
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'}};
border-bottom: 1px solid #333;
padding: 0 2em;
height: 80vh;
transition: background-color, color .5s;
h2{
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'}}; 
}
`

export default PageContainer