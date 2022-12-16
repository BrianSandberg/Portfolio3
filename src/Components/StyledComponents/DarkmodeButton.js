import styled from 'styled-components'

const DarkmodeButton = styled.div`
i{
color: ${props => props.color === 'light' ? 'black' : 'yellow'};
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
}
`

export default DarkmodeButton