import React, {useContext} from 'react'
import ThemeContext from '../Components/ThemeContext';
import {
Box,
Container,
Row,
Column,
Link,
Heading,
} from "../Components/StyledComponents/FooterStyles";

function Footer() {
	const {theme} = useContext(ThemeContext)
    
return (
	<Box color={theme}>
	<Container>
		<Row>
		<Column>
			<Heading color={theme} >About Us</Heading>
			<Link color={theme} href="#">Goal</Link>
			<Link color={theme} href="#">Vision</Link>
		</Column>
		<Column>
			<Heading color={theme}>Contact Us</Heading>
			<Link color={theme} href="#">Oliver</Link>
			<Link color={theme} href="#">Mads</Link>
			<Link color={theme} href="#">Steen</Link>
		</Column>
		<Column>
			<Heading color={theme}>Social Media</Heading>
			<Link color={theme} href="https://www.facebook.com/">
			<i className="facebook">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</Link>
			<Link color={theme} href="https://www.instagram.com/">
			<i className="instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</Link>
			<Link color={theme} href="https://twitter.com/">
			<i className="twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</Link>
		</Column>
		</Row>
	</Container>
	</Box>
);
};

export default Footer;
