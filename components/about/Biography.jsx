import {
  Center,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Education from "./Education";
import Story from "./Story";
import ReactCode from "../../components/home/ReactCode";

const Biography = () => {
  return (
    <Flex flexDir="column" py={10} fontWeight="light">
      <Tabs variant="enclosed" >
        <TabList >
          <Tab _focus={{outline: 0}} fontWeight="bold" >Background Story</Tab>
          <Tab _focus={{outline: 0}} fontWeight="bold" >Education and Training</Tab>
        </TabList>
        <TabPanels>
          <TabPanel pt={10}>
            <Story />
            <ReactCode />
          </TabPanel>
          <TabPanel pt={10}>
            <Education />
          </TabPanel>

        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Biography;
