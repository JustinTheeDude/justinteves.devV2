import type { NextPage } from 'next';
import { Heading, Text, Box } from '@chakra-ui/react';
import { textMediaQuery } from "../utils/utils";

const About: NextPage = () => {
  return (
    <Box as="section" maxW="650px" m="auto"> 
      <Heading 
        as="h1"
        fontSize={textMediaQuery("3xl", "5xl")}
        fontWeight="bold"
        lineHeight="2"
        mb="2em"
      >
        About Me
      </Heading>
      <Heading 
        as="h2" 
        fontSize={textMediaQuery("2xl", "4xl")}
        fontWeight="bold"
        mb=".5em"
      >
        Background
      </Heading>
      <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
      <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
      <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
    </Box>
  )
}

export default About;
