import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import PrivateChat from "./PrivateChat";
import PublicChat from "./PublicChat";

const ChatContainer = () => {
  return (
    <Flex py={4} w="full">
      <Tabs w="full">
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
