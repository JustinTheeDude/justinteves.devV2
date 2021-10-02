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
    </Box>
  )
}

export default About;
