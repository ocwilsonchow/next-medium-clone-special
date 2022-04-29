import { Button } from "@chakra-ui/button";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { Fade } from "@chakra-ui/transition";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThumbsUp from "../../images/Thumbsup.png";

const CallForContact = () => {
  const boxColor = useColorModeValue("gray.50", '#0A0E19')

  return (
    <Flex
      p={8}
      bg={boxColor}
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w="full" alignItems="center">
        <Text
          fontWeight="bold"
          fontSize={["3xl", "3xl", "3xl", "4xl"]}
          mb={5}
        >
          Contact Wilson
        </Text>
        <Text
          mb={[6, 6, 10, 10]}
          fontSize={["md", "md", "lg", "lg"]}
        >
          Get in touch today to explore opportunities for collaborations
        </Text>
        <Link href="/me/contactWilson">
          <Button colorScheme="twitter" size="lg" isTruncated borderRadius="full">
            Leave a message
          </Button>
        </Link>
      </Box>

      <motion.div  whileHover={{ scale: 1.1, rotate: -10 }} whileTap={{ scale: 0.9 }}>
        <Image
          src={ThumbsUp}
          alt="thumbs_up"
          width="250px"
          height="250px"
          objectFit="contain"
        />
      </motion.div>
    </Flex>
  );
};

export default CallForContact;
