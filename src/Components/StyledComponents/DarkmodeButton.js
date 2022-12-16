import styled from 'styled-components'

const DarkmodeButton = styled.div`
color: ${props => props.color === 'light' ? 'black' : 'red'};
padding: 15px 32px;
font-size: 16px;

border: none;
transition: color 1s;
&:hover {
	color: green;
	transition: 10ms ease-in;
`

export default DarkmodeButton