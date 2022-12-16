import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 10px;
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
width: 100%;
box-sizing: border-box;
background-color: ${props => props.color === 'light' ? 'whitesmoke' : '#202020'};
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: auto;
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(275px, auto));
`;

export const Heading = styled.p`
font-size: 15px;
color: white;
margin-bottom: 20px;
font-weight: bold;
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
`;

export const Link = styled.a`
color: white;
margin-bottom: 10px;
font-size: 12px;
text-decoration: none;
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};

&:hover {
	color: green;
	transition: 175ms ease-in;
}
`;