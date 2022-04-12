import { Box, Button, Center, Code, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Slider from "../components/home/Slider";

const Typewritter = dynamic(() => import("../components/Typewritter"), {
  ssr: false,
});

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Center>
        <Code>This website is still under development!</Code>
      </Center>
      <Box py={20} w="full" h="400px">
        <Text fontWeight="bold" fontSize="5xl">
          Hello 👋🏻
        </Text>
        <Text fontWeight="bold" fontSize="5xl">
          I am Wilson
        </Text>
        <Typewritter />
      </Box>
      <Slider/>
    </Flex>
  );
}
