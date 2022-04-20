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

import Message from "./Message";

const PublicChat = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const dummyRef = useRef();
  const {
    publicMessages,
    createPublicMessage,
    setMessageInput,
    messageInput,
    setOnPublicChat,
  } = useChat();

  useEffect(() => {
    setOnPublicChat(true);
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
    return () => {
      setOnPublicChat(false);
    };
  }, [publicMessages]);

  const handleSubmit = () => {
    createPublicMessage();
  };
  return (
    <Flex flexDir="column" position="relative">
      <Box>
        <Flex flexDir="column" w="full" overflow="auto">
          {publicMessages.length === 0 && (
            <Center p={4}>
              <Text>Loading...</Text>
              <Spinner />
            </Center>
          )}
          {publicMessages.length !== 0 &&
            publicMessages?.map((msg) => (
              <Fade in key={msg?._id}>
                <Message msg={msg} />
              </Fade>
            ))}
          <div ref={dummyRef}></div>
        </Flex>
      </Box>
      <Box position="sticky" bottom={0} pt={4} pb={7}  bg={bgColor}>
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
