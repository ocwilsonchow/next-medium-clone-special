import { useEffect, useRef } from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import MessageContainer from "../../components/supabaseChat/MessageContainer";

const ChatContainer = ({messages}) => {
  const dummyRef = useRef();


  useEffect(() => {
    dummyRef.current.scrollIntoView();
  }, [messages]);

  return (
    <Flex>
      <Flex flexDir="column" w="full" pt={4}>
        {messages?.length === 0 && (
          <Center p={4}>There is no message in this room</Center>
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
