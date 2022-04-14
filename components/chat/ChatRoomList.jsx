import { Box, Fade, Flex, LinkBox, Text } from "@chakra-ui/react";
import React from "react";

const ChatRoomList = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="medium">
        Channels
      </Text>
      <Fade in>
        <Box my={4}>
          <LinkBox py={3} px={4} borderWidth="0.5px" borderRadius="base">
            <Text fontWeight="medium">Public</Text>
          </LinkBox>
        </Box>
      </Fade>
    </Box>
  );
};

export default ChatRoomList;