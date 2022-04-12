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
    <Flex flexDir="column" w="full" justifyContent="space-evenly">
      <Center>
        <Code>This website is still under development!</Code>
      </Center>
      <Box py="17%" w="full" h="500px">
        <Text fontWeight="bold" fontSize={["5xl", "5xl", "5xl", "6xl"]}>
          Hello 👋🏻
        </Text>
        <Text fontWeight="bold" fontSize={["5xl", "5xl", "5xl", "6xl"]} mb={6}>
          I am Wilson
        </Text>
        <Typewritter />
      </Box>

      <Box py="100px" w="full" h="300px">
        <HStack py={4} mb={4} spacing={3}>
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
        <Link href="/me/about">
          <Button borderRadius="full">Read more about Wilson</Button>
        </Link>
      </Box>
    </Flex>
  );
}
