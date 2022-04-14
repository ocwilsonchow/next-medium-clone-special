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
import SearchBar from "../layout/SearchBar";

const ChatContainer = () => {
  const { createPublicMessage, setMessageInput, messageInput } = useChat();

  const handleSubmit = () => {
    createPublicMessage();
  };

  return (
    <Flex flexDir="column" justifyContent="space-between" >
      <Tabs>
        <TabList>
          <Tab>Public</Tab>
          <Tab>Private</Tab>
          <Tab>Search</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PublicChat />
          </TabPanel>
          <TabPanel>
            <PrivateChat />
          </TabPanel>
          <TabPanel>
            <SearchBar />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ChatContainer;
