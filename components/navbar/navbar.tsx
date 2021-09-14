import { Image, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { textMediaQuery } from '../../utils/utils';
import { useState } from 'react';

export const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Box as="nav" maxW="80vw" m="auto" display="flex" alignItems="center" justifyContent="space-between" py="20px">
			<Link href="/" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<Image src="/head.png" 
					objectFit="contain" 
					boxSize="150px"
					loading="eager" 
					alt="Drawing of My head" 
					title="Ya boi drawn by Jorge A Castro(@hatebear_1962)"
					transform={isHovered ? "translateY(-10px) rotate(-10deg)" : ""}
					transition="transform .3s ease"/>
			</Link>
			<UnorderedList role="menubar" display="flex" p="20px" listStyleType="none" w="100%" maxW="300px" justifyContent="space-around">
				<ListItem>
					<Link href="/about" fontSize={textMediaQuery("md", "2xl")} fontWeight="bold">About</Link>
				</ListItem>
				<ListItem>
					<Link href="/blog" fontSize={textMediaQuery("md", "2xl")} fontWeight="bold">Blog</Link>
				</ListItem>
			</UnorderedList>
		</Box>
	);
}

