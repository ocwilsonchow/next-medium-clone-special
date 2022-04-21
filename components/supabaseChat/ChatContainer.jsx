import { Box, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";
import MessageContainer from "../../components/supabaseChat/MessageContainer"

const ChatContainer = ({ messages }) => {
  console.log(messages);
  return (
    <Flex p={4} borderWidth="0.5px" h="80vh">
      <Flex flexDir="column">
        {messages?.map((msg) => (
          <Box key={msg.id}>
            <MessageContainer msg={msg}/>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default ChatContainer;
