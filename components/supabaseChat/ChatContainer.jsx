import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";
import MessageContainer from "../../components/supabaseChat/MessageContainer";

const ChatContainer = ({ messages }) => {
  const dummyRef = useRef();

  useEffect(() => {
    dummyRef.current.scrollIntoView();
  }, [messages]);


  return (
    <Flex>
      <Flex flexDir="column" w="full">
        {messages.length === 0 && (
          <Center p={2}>There is no message in this room</Center>
        )}
        {messages?.map((msg) => (
          <Box key={msg.id}>
            <MessageContainer msg={msg} />
          </Box>
        ))}
        <div ref={dummyRef}></div>
      </Flex>
    </Flex>
  );
};

export default ChatContainer;
