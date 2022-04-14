import { useRef, useEffect } from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
  Input,
  Fade,
  Spinner,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "../../context/ChatContext";

import Message from "./Message";

const PublicChat = () => {
  const dummyRef = useRef();
  const { publicMessages, createPublicMessage, setMessageInput, messageInput } =
    useChat();

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [publicMessages]);

  const handleSubmit = () => {
    createPublicMessage();
  };
  return (
   <Flex flexDir="column" bg='salmon'>
      <Flex flexDir="column" maxH="60vh" w='full' overflow="auto" bg='salmon'>
      {publicMessages.length === 0 && (
        <Center p={4}>
          <Text>Loading...</Text>
          <Spinner />
        </Center>
      )}
      {publicMessages.length !== 0 && publicMessages?.map((msg) => (
        <Fade in key={msg?._id}>
          <Message msg={msg} />
        </Fade>
      ))}
      <div ref={dummyRef}></div>
    </Flex>
    <FormControl pt={3}>
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
            placeholder="Message"
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </InputGroup>
      </FormControl>
   </Flex>
  );
};

export default PublicChat;
