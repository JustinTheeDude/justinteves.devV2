import { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { BackgroundSVG } from "./background";

type ContainerProps = {
	children: Object;
};

export const Layout: NextPage<ContainerProps> = ({
	children,
}: ContainerProps) => {
	return (
		<>
			<Head>
				<title>All Burger No Pickles</title>
				<meta name="author" content="Justin Teves aka JT" />
				<meta
					name="description"
					content="Justin Teves is a software engineer focused on full stack development, eating snacks, big chillin, you know what it is"
				/>
			</Head>
			<Box maxW="80vw" margin="auto">
				<BackgroundSVG />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Box>
		</>
	);
};
