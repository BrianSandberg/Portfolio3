import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${props => props.color === 'light' ? 'whitesmoke' : '#202020'};
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
margin: 0;
padding: 0 1em;
width: 100%;
box-sizing: border-box;
transition: background-color, border-bottom .5s;
`

export default Container