import styled from 'styled-components'


const Button = styled.button`
color: ${props => props.color === 'light' ? 'black' : 'yellow'};
padding: 15px 32px;
font-size: 16px;

border: none;
transition: color 5s;
&:hover {
	color: green;
	transition: 10ms ease-in;
`

export default Button