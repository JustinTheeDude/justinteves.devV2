import { Box } from "@chakra-ui/react";

export const BackgroundSVG = () => {
	return (
		<Box
			position="absolute"
			top="0"
			left="0"
			right="0"
			zIndex="-1"
			height="100vh"
		>
			<Box bg="grey.800" height="500px" />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#1b2531"
					fill-opacity="1"
					d="M0,96L40,128C80,160,160,224,240,250.7C320,277,400,267,480,245.3C560,224,640,192,720,181.3C800,171,880,181,960,160C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
				></path>
			</svg>
		</Box>
	);
};
