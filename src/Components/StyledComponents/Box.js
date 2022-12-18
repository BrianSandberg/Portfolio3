import styled from 'styled-components'


export const Box = styled.div`
position: relative;
width: 100%;
box-sizing: border-box;
background-color: ${props => props.color === 'light' ? 'whitesmoke' : 'Grey'};
//color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
//font-size: 16px;
`;