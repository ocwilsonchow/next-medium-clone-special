import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Avatar, ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./index";

const SideBar = () => (
  <VStack p={4} borderWidth="0.5px">
    <Box bg="salmon" boxSize="50px"></Box>
    <Box bg="salmon" boxSize="50px"></Box>
  </VStack>
);

const CompanyHeader = () => (
  <Flex>
    <Text mb={2}>Channel list header</Text>
  </Flex>
);

const ChannelListContainer = () => {
  return (
    <Flex>
      <SideBar />
      <Flex flexDir="column" p={4} borderWidth="0.5px">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={()=> {}}
          List={(listProps)=> (
            <TeamChannelList
              {...listProps}
              type="team"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={()=> {}}
          List={(listProps)=> (
            <TeamChannelList
              {...listProps}
              type="messaging"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </Flex>
    </Flex>
  );
};

export default ChannelListContainer;
