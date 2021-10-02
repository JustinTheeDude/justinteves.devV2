import { Image, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { StyledLink } from '../styled/link';
import NextLink from 'next/link';

export const Navbar = () => {
	return (
		<Box as="nav" maxW="80vw" m="auto" display="flex" alignItems="center" justifyContent="space-between" py="20px" role="navigation">
			<NextLink href="/" passHref>
				<Link _hover={ { transform: "translateY(-10px) rotate(-10deg)" } } >
					<Image src="/head.png" 
						objectFit="contain" 
						boxSize="150px"
						loading="eager" 
						alt="Drawing of My head" 
						title="Ya boi drawn by Jorge A Castro(@hatebear_1962)"
						transition="transform .3s ease"/>
				</Link>
			</NextLink>
			<UnorderedList  display="flex" p="20px" listStyleType="none" w="100%" maxW="300px" justifyContent="space-around">
				<ListItem>
					<StyledLink url="/about">About</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink url="/blog">Blog</StyledLink>
				</ListItem>
			</UnorderedList>
		</Box>
	);
}

