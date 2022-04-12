import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";

const Typewritter = dynamic(() => import("../components/Typewritter"), {
  ssr: false,
});

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Center>
        <Code>This website is still under development!</Code>
      </Center>
      <Box py="150px" w="full" h="500px">
        <Text fontWeight="bold" fontSize="6xl">
          Hello 👋🏻
        </Text>
        <Text fontWeight="bold" fontSize="6xl" mb={6}>
          I am Wilson
        </Text>
        <Typewritter />
      </Box>

      <Box py="100px" w="full" h="300px">
        <HStack py={4} spacing={3}>
          <IconButton
            fontSize="lg"
            variant="outline"
            rounded="full"
            icon={<AiOutlineGithub />}
          />
          <IconButton
            fontSize="lg"
            variant="outline"
            rounded="full"
            icon={<AiFillFacebook />}
          />
          <IconButton
            fontSize="lg"
            variant="outline"
            rounded="full"
            icon={<AiFillInstagram />}
          />
          <IconButton
            fontSize="lg"
            variant="outline"
            rounded="full"
            icon={<AiFillYoutube />}
          />
          <IconButton
            fontSize="lg"
            variant="outline"
            rounded="full"
            icon={<AiTwotoneMail />}
          />
        </HStack>
      </Box>

      <Box pb={20}>
        <Text fontWeight="medium" color="cyan.500">
          Everyone has a story
        </Text>
        <Text fontWeight="bold" fontSize="4xl">
          About Wilson
        </Text>
        <Text mb={8} fontWeight="light">
          Passionate web developer based in Hong Kong. From a pharmacy
          background. Love beautiful software applications. Passionate in
          front-end development and Blender 3D graphics. His vision is to build
          applications that help people live better lives.
        </Text>
        <Link href="/me/about">
          <button class="px-3 py-2 rounded-full bg-blue-500 hover:bg-blue-600 shadow-xl shadow-cyan-500/50 text-white">
            Read more
          </button>
        </Link>
      </Box>
    </Flex>
  );
}
