import { Button } from "@chakra-ui/button";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { Fade } from "@chakra-ui/transition";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rock from "../../images/rock.png";

const CallForRead = () => {
  const boxColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex
      mt={10}
      px={10}
      py={8}
      bg={boxColor}
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w="full" alignItems="center">
        <Text fontWeight="bold" fontSize={["2xl", "2xl", "2xl", "2xl"]} mb={5}>
          Everyone has a story
        </Text>
        <Text fontSize="lg" mb={10}>Wilson finds his passion in software development</Text>
        <Link href="/contactWilson">
          <Button colorScheme="twitter" size="lg" mb={2}>
            Read More 🌍
          </Button>
        </Link>
      </Box>

      <motion.div
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4"
      >
        <Image
          src={Rock}
          alt="thumbs_up"
          width="200px"
          height="200px"
          objectFit="contain"
        />
      </motion.div>
    </Flex>
  );
};

export default CallForRead;
