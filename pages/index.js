import {
  Box,
  Button,
  Center,
  Code,
  Collapse,
  Fade,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
import Slider from "../components/home/Slider";
import CallForContact from "../components/home/CallForContact";
import Backhand from "../images/Backhand.png";

const Typewritter = dynamic(() => import("../components/Typewritter"), {
  ssr: false,
});

const skills = [
  "React.js",
  "Next.js 🔥",
  "Blender ⚙️ ",
  "Framer Motion",
  "Chakra UI",
  "UI Design 👀",
  "Tailwind 💨",
];
const learnings = ["Three.js 🌟", "Redux", "RTK Query", "Graphql"];

export default function Home() {
  return (
    <Fade in>
      <Flex flexDir="column" w="full" justifyContent="space-evenly">

        <Center p={2}>
          <Code bg='none' fontSize="sm" textAlign='center'>
            Bear with me, web development still in progress!
          </Code>
        </Center>

        <Box py="12%" w="80%" h="450px" position="relative">
          <Text fontWeight="bold" fontSize={["5xl", "5xl", "5xl", "6xl"]}>
            Hello 👋🏻
          </Text>
          <Text
            fontWeight="bold"
            fontSize={["5xl", "5xl", "5xl", "6xl"]}
            mb={6}
          >
            I am Wilson
          </Text>
          <Typewritter />
        </Box>

        <Box py="50px" w="full" h="300px">
          <Link href="/me/about">
            <Button mb={2} colorScheme="twitter" size="lg">
              My Story 🌍
            </Button>
          </Link>

          <HStack py={20} spacing={3}>
            <a
              href="https://github.com/ocwilsonchow/next-medium-clone-special"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<AiOutlineGithub />}
                fontSize="lg"
                variant="outline"
                borderRadius="full"
              />
            </a>
            <a
              href="https://www.facebook.com/ocwilsonchow/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                fontSize="lg"
                variant="outline"
                rounded="full"
                icon={<AiFillFacebook />}
              />
            </a>

            <a
              href="https://www.instagram.com/ocwilsonchow/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                fontSize="lg"
                variant="outline"
                rounded="full"
                icon={<AiFillInstagram />}
              />
            </a>
            <a
              href="https://www.youtube.com/c/SLCHOW/featured"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                fontSize="lg"
                variant="outline"
                rounded="full"
                icon={<AiFillYoutube />}
              />
            </a>

            <IconButton
              fontSize="lg"
              variant="outline"
              rounded="full"
              icon={<AiTwotoneMail />}
            />
          </HStack>
        </Box>
        <Box pb={20}>
          <Text fontWeight="bold" fontSize="3xl" mb={4}>
            Skills
          </Text>
          <Flex flexWrap="wrap">
            {skills.map((skill, i) => (
              <Button key={i} p={4} mr={3} my={1} bg="none" variant="outline">
                {skill}
              </Button>
            ))}
          </Flex>
        </Box>
        <Box pb={20}>
          <Text fontWeight="bold" fontSize="3xl" mb={4}>
            My favorite libraries
          </Text>
          <Slider />
        </Box>
        <Box pb={20}>
          <Text fontWeight="bold" fontSize="3xl" mb={4}>
            Technologies that I am learning and practising
          </Text>
          <Flex flexWrap="wrap">
            {learnings.map((tech, i) => (
              <Button key={i} p={4} mr={3} my={1} bg="none" variant="outline">
                {tech}
              </Button>
            ))}
          </Flex>
        </Box>
        <CallForContact />
        <Center p={20} mt={10} fontSize="sm" bottom="0%">
          Built in 🇭🇰 by Wilson Chow
        </Center>
      </Flex>
    </Fade>
  );
}
