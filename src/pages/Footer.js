import React, { useContext } from 'react'
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
	const { theme } = useContext(ThemeContext)

	return (
		<Box color={theme}>
			<Container>
				<Row>
					<Column>
						<Heading color={theme} >About Us</Heading>
						<Link color={theme} >Goal</Link>
						<Link color={theme} >Vision</Link>
					</Column>
					<Column>
						<Heading color={theme}>Contact Us</Heading>
						<Link color={theme} >Oliver</Link>
						<Link color={theme} >Mads</Link>
						<Link color={theme} >Steen</Link>
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

//recoil?
export default Footer;
