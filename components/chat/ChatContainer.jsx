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
import React from "react";
import PrivateChat from "./PrivateChat";
import PublicChat from "./PublicChat";
import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "../../context/ChatContext";

const ChatContainer = () => {
  const { createPublicMessage, setMessageInput, messageInput } = useChat();

  const handleSubmit = () => {
    createPublicMessage();
  };

  return (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
      <Tabs display="flex" flexDir="column" h="100%">
        <TabList>
          <Tab>Public</Tab>
          <Tab>Private</Tab>
        </TabList>

        <TabPanels h="100%">
          <TabPanel h="100%" >
            <PublicChat />
          </TabPanel>
          <TabPanel>
            <PrivateChat />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ChatContainer;
