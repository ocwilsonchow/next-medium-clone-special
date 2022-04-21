import { Box, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";

const ChatContainer = ({messages}) => {
  console.log(messages)
  return (
    <Flex p={4} borderWidth="0.5px" h="80vh">
      {messages?.map((msg) => (
        <Box key={msg.id}>
          <Text>{msg.text}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default ChatContainer;
