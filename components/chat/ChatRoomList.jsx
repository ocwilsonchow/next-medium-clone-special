import { Box, Fade, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ChatRoomList = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="medium" >
        Channels
      </Text>
      <Fade in>
        <Box my={4}>
        <Box py={3} px={4} borderWidth="0.5px" borderRadius="base">
          <Text fontWeight="medium">Public</Text>
        </Box>
      </Box>
      </Fade>
    </Box>
  );
};

export default ChatRoomList;
