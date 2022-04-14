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

    }, [publicMessages])

  const handleSubmit = () => {
    createPublicMessage();
  };
  return (
    <Flex flexDir="column" h="100%">
      <Flex flexDir="column" h="100%" justifyContent="space-between">
        <Box maxH="80vh" overflow="auto">
          {publicMessages?.map((msg, i) => (
            <Message msg={msg} key={i} />
          ))}
          <div ref={dummyRef}></div>
        </Box>
        <FormControl py={3}>
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
    </Flex>
  );
};

export default PublicChat;
