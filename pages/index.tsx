import type { NextPage } from 'next'
import { Image, Text, Flex, Box, Button, Heading, UnorderedList, ListItem} from "@chakra-ui/react"
import { SiNextDotJs, SiYelp, SiReact} from 'react-icons/si';
import { textMediaQuery } from '../utils/utils';

const Home: NextPage = () => {
  return (
    <>
      <Box as="section" maxW="80vw" m="auto" display="flex" flexDirection="column">
        <Flex alignItems="center" justifyContent="center" flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <Box w={{base: "100%", lg: "50%"}} as="header" p="20px">
            <Heading as="h1" fontSize={textMediaQuery("3xl", "5xl")} fontWeight="bold">Hi, i'm Justin.</Heading>
            <Text fontSize={textMediaQuery("xl", "2xl")}>Welcome to my spot on the interweb where you can find all of my thoughts, work, and memes.</Text>
            <Heading as="h2" fontSize={textMediaQuery("xl", "3xl")} fontWeight="bold" mt="50px">That's awesome, but who are you?</Heading>
            <Text fontSize={textMediaQuery("xl", "2xl")}>I am a software engineer with a focus on full stack development building saucy UI's and robust backends.</Text>
            <Text fontSize={textMediaQuery("xl", "2xl")} mt="20px">Want to work? Or just shoot the breeze?</Text>
            <Button as="a" 
              href="/contact" 
              colorScheme="purple" 
              textTransform="uppercase" 
              mt="25px">Shoot me a message</Button>
          </Box>
          <Image src="/justin_artwork.png" 
            objectFit="contain" 
            boxSize={{ base: "100%", lg:"50%" }}
            loading="eager" 
            alt="Drawing of me(ya boi)" 
            title="Ya boi drawn by Jorge A Castro(@hatebear_1962)"/>
        </Flex>
        <Box mt={{base: "30px", lg: "15em"}}>
          <Box as="header">
            <Heading as="h3" color="purple.300" textAlign="center">Featured Projects</Heading>
          </Box>
          <Box my="10em" maxW="1100px" mx="auto" display="flex" justifyContent="space-around">
            <Box maxW="30em" w="90%" m="auto">
              <Box backgroundColor="purple.600" p="40px">
                <Text fontSize="3xl" fontWeight="bold" textAlign="center">Yelp Roulette</Text>
              </Box>
              <Box p="30px" backgroundColor="white">
                <Heading as="h4" fontSize="2xl" color="grey.700" lineHeight="2">Yelp Roulette</Heading>
                <Text color="grey.700">Yelp Roulette(WIP) is an app that randomly selects a restaraunt depending on category selected and displays a link to the yelp page.</Text>
                <UnorderedList mt="20px" display="flex" justifyContent="space-around" alignItems="center" maxW="200px">
                  <ListItem>
                    <SiReact />
                  </ListItem>
                  <ListItem>
                    <SiNextDotJs />
                  </ListItem>
                  <ListItem>
                    <SiYelp />
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
