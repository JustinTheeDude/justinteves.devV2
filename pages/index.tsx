import { NextPage } from "next";
import {
  Image,
  Text,
  Flex,
  Box,
  Button,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { DiGithubAlt } from "react-icons/di";
import { FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { textMediaQuery } from "../utils/utils";

const Home: NextPage = () => {
  return (
    <>
      <Box
        as="section"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Box w={{ base: "100%", lg: "50%" }} as="header" p="20px">
            <Heading
              bgGradient="linear(to-tl, purple.300, purple.600)"
              bgClip="text"
              fontSize={textMediaQuery("3xl", "5xl")}
              fontWeight="bold"
              lineHeight="2"
            >
              Hi, i&apos;m Justin.
            </Heading>
            <Text fontSize={textMediaQuery("xl", "2xl")}>
              Welcome to my spot on the interweb where you can find all of my
              thoughts, work, and memes.
            </Text>
            <Heading
              bgGradient="linear(to-tl, purple.300, purple.600)"
              bgClip="text"
              as="h2"
              fontSize={textMediaQuery("xl", "3xl")}
              fontWeight="bold"
              mt="50px"
              lineHeight="2"
            >
              That&apos;s awesome, but who are you?
            </Heading>
            <Text fontSize={textMediaQuery("xl", "2xl")}>
              Just a boy with a computer and a dream, also focusing on full
              stack development.
            </Text>
            <Heading
              bgGradient="linear(to-tl, purple.400, purple.700)"
              bgClip="text"
              as="h2"
              fontSize={textMediaQuery("xl", "2xl")}
              mt="20px"
              fontWeight="bold"
              lineHeight="2"
            >
              Where else can I reach you?
            </Heading>
            <UnorderedList
              listStyleType="none"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              maxW="160px"
              ml="0"
            >
              <ListItem>
                <Link
                  aria-label="my github"
                  href="http://www.github.com/JustinTheeDude"
                  _hover={{ path: { fill: "purple.400" } }}
                  isExternal
                >
                  <DiGithubAlt size="3em" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  aria-label="my tweet tweet"
                  href="https://twitter.com/justin_teves_"
                  _hover={{ path: { fill: "purple.400" } }}
                  isExternal
                >
                  <FaTwitter size="2.2em" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  aria-label="my linkedin"
                  href="https://www.linkedin.com/in/justin-teves-45a07b163/"
                  _hover={{ path: { fill: "purple.400" } }}
                  isExternal
                >
                  <SiLinkedin size="2em" />
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Image
            src="/justin_artwork.webp"
            objectFit="contain"
            boxSize={{ base: "100%", lg: "50%" }}
            loading="eager"
            alt="Drawing of me(ya boi)"
            title="Ya boi drawn by Jorge A Castro(@hatebear_1962)"
          />
        </Flex>
        <Box mt={{ base: "30px", lg: "5em" }}>
          <Box as="header">
            <Heading as="h3" color="purple.400" textAlign="center">
              Projects I work on.
            </Heading>
          </Box>
          <Box
            my="5em"
            maxW="1100px"
            mx="auto"
            display="flex"
            justifyContent="space-around"
          >
            <Box maxW="30em" w="90%" m="auto">
              <Box bgGradient="linear(to-tr, purple.400, purple.700)" p="40px">
                <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                  Yelp Roulette
                </Text>
              </Box>
              <Box p="30px" backgroundColor="white">
                <Heading as="h4" fontSize="2xl" color="grey.700" lineHeight="2">
                  Yelp Roulette
                </Heading>
                <Text color="grey.700">
                  Yelp Roulette(WIP) is an app that randomly selects a
                  restaraunt depending on category selected and displays a link
                  to the yelp page.
                </Text>
                <Text color="grey.900" fontWeight="bold" mt="10px">
                  Technology Used:
                </Text>
                <UnorderedList
                  my="10px"
                  mb="20px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  maxW="15em"
                >
                  <ListItem>
                    <Text color="grey.900">Next JS</Text>
                  </ListItem>
                  <ListItem>
                    <Text color="grey.900">React JS</Text>
                  </ListItem>
                  <ListItem>
                    <Text color="grey.900">Yelp API</Text>
                  </ListItem>
                </UnorderedList>
                <Button
                  rel="noreferrer"
                  as="a"
                  colorScheme="purple"
                  href="https://github.com/JustinTheeDude/yelp_roulette"
                  target="_blank"
                  mx="10px"
                >
                  Repo
                </Button>
                <Button
                  rel="noreferrer"
                  as="a"
                  colorScheme="purple"
                  href="https://yelproulette.com"
                  target="_blank"
                  mx="10px"
                >
                  Site
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
