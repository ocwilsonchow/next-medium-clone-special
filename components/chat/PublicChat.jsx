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
  Collapse,
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
    <Box>
      <Flex flexDir="column" h="85vh" overflow="auto">
        {publicMessages?.map((msg, i) => (
          <Fade in key={msg?._id}>
            <Message msg={msg} />
          </Fade>
        ))}
        <div ref={dummyRef}></div>
      </Flex>
      <FormControl pt={4}>
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
    </Box>
  );
};

export default PublicChat;
