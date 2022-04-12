import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

const ChatContainer = () => {
  return (
    <Flex py={4}>
      <Tabs w="full">
        <TabList>
          <Tab>Public</Tab>
          <Tab>Private</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ChatContainer;
