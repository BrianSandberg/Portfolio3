import styled from 'styled-components'


const Button = styled.button`
color: ${props => props.color === 'light' ? 'black' : 'black'};
padding: 15px 32px;
font-size: 16px;

border: none;
transition: color 1s;
&:hover {
	color: green;
	transition: 10ms ease-in;
`

export default Button