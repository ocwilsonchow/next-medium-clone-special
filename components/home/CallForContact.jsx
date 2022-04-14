import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import ThumbsUp from "../../images/Thumbsup.png";

const CallForContact = () => {
  return (
    <Flex
      p={10}
      bg="cyan.100"
      borderRadius="xl"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{base: 'column', md: 'row'}}
    >
      <Box mr={4} alignItems='center'>
        <Text
          color="black"
          fontWeight="bold"
          fontSize={["3xl", "3xl", "3xl", "4xl"]}
          mb={5}
        >
          Contact Wilson
        </Text>
        <Text color="gray.500" mb={[6,6,10,10]} fontSize={["md", "md", "lg", "lg"]}>
          Get in touch today to explore opportunities for collaborations
        </Text>
        <Button colorScheme="twitter" size='lg' >Leave a message</Button>
      </Box>

      <Image src={ThumbsUp} alt='thumbs_up' width="250px" height="250px" objectFit="contain" />
    </Flex>
  );
};

export default CallForContact;
