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
import SearchBar from "../layout/SearchBar";

const ChatContainer = () => {
  return (
    <Flex flexDir="column">
     <SearchBar/>
      <Tabs>
        <TabList>
          <Tab>Public</Tab>
          <Tab>Private</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
