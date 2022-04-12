import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Typewritter from "../components/Typewritter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Box py={20} w="full">
        <Text fontWeight="bold" fontSize="5xl">
          Hello 👋🏻
        </Text>
        <Text fontWeight="bold" fontSize="5xl">
          I am Wilson
        </Text>
        <Typewritter />

      </Box>
    </Flex>
  );
}
