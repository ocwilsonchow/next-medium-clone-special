import { Box, Flex } from "@chakra-ui/react";


import dynamic from "next/dynamic";

const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});


const ReactCode = () => {
  return (
    <Flex
      flexDir="column"
      bg="gray.600"
      borderRadius="md"
      borderColor="gray.500"
      borderWidth="0.5px"
      overflow="auto"
    >
      <Flex borderBottomWidth="0.5px" borderColor="gray.500" w="full" flexWrap="wrap">
        <Box px={4} py={2} borderRadius="md" fontSize="sm" color="gray.500">
          Problems
        </Box>
        <Box px={4} py={2} borderRadius="md" fontSize="sm" color="gray.500">
          Output
        </Box>
        <Box px={4} py={2} borderRadius="md" fontSize="sm" color="gray.200">
          Terminal
        </Box>
        <Box px={4} py={2} borderRadius="md" fontSize="sm" color="gray.500">
          Debug Console
        </Box>
      </Flex>
      <Flex
        flexDir="column"
        w="full"
        h="70px"
        bg="gray.700"
        color="gray.200"
        p={4}
        borderBottomRadius="md"
      >
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Source Code Pro",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          startDelay={500}
          cursorColor="cyan"
          multiText={["npx contact-wilson-chow", "npx get-in-touch"]}
          typeSpeed={100}
        />
      </Flex>
    </Flex>
  );
};

export default ReactCode;
