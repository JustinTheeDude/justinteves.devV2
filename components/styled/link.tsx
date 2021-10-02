import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { textMediaQuery } from "../../utils/utils";

type LinkProps = {
	children: Object;
	url: string;
};

export const StyledLink = ({ children, url }: LinkProps) => {
	return (
		<NextLink href={url} passHref>
			<Link
				color="#fff"
				fontSize={textMediaQuery("md", "xl")}
				fontWeight="bold"
				_hover={{
					bgGradient: "linear(to-tr, purple.400, purple.500)",
					bgClip: "text",
				}}
			>
				{children}
			</Link>
		</NextLink>
	);
};
