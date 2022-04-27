import { useRef, useEffect } from "react";
import {
  Flex,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  Fade,
  Spinner,
  Text,
  Center,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "../../context/ChatContext";
import groq from "groq";
import useSWR from "swr";
import { readClient } from "../../lib/sanity";

const key = groq`*[_type == "chatMessage"]  | order(createdAt asc) {
  createdAt,
  _id,
  message,
  userEmail,
  username,
  userImage
}`;

import Message from "./Message";

const PublicChat = () => {
  const dummyRef = useRef();
  const {
    createPublicMessage,
    setMessageInput,
    messageInput,
    setOnPublicChat,
  } = useChat();
  const fetcher = (query) => readClient.fetch(query);
  const { data: sanityMessages, mutate } = useSWR(key, fetcher);

  useEffect(() => {
    setOnPublicChat(true);
    dummyRef.current.scrollIntoView();
    return () => {
      setOnPublicChat(false);
    };
  }, [sanityMessages]);

  const handleSubmit = () => {
    createPublicMessage();
  };
  return (
    <Flex flexDir="column" position="relative">
      <Box p={4}>
        <Flex flexDir="column" w="full" h="calc(100vh - 180px)" overflow="auto">
          {sanityMessages?.length === 0 && (
            <Center p={4}>
              <Text>Loading...</Text>
              <Spinner />
            </Center>
          )}
          {sanityMessages?.length !== 0 &&
            sanityMessages?.map((msg) => (
              <Fade in key={msg?._id}>
                <Message msg={msg} />
              </Fade>
            ))}
          <div ref={dummyRef}></div>
        </Flex>
      </Box>

      <Box position="sticky" bottom={4}>
        <FormControl w="full">
          <InputGroup>
            <InputRightElement>
              <IconButton
                variant="ghost"
                icon={<AiOutlineSend />}
                onClick={() => handleSubmit()}
                disabled={messageInput == ""}
              />
            </InputRightElement>
            <Input
              value={messageInput}
              boxShadow="base"
              placeholder="Message"
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default PublicChat;
