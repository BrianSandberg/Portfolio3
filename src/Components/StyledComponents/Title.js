import styled from 'styled-components'

const Title = styled.h1`
color: ${props => props.color === 'dark' ? 'white' : '#202020'};
transition: color .5s;
`



export default Title