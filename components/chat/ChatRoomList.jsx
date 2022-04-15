import {
  Box,
  Button,
  Fade,
  Flex,
  LinkBox,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

const ChatRoomList = () => {
  return (
    <Fade in>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="medium">
          Channels
        </Text>
        <Box my={4}>
          <LinkBox py={3} px={4} borderWidth="0.5px" borderRadius="base">
            <Text fontWeight="medium">Public</Text>
          </LinkBox>
        </Box>

        <Flex flexDir="column" my={4}>
          <Tooltip label="Hey! Wilson is still working on this feature...">
            <Button borderWidth="0.5px" borderRadius="base">
              <Text fontWeight="medium">Create a new room</Text>
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Fade>
  );
};

export default ChatRoomList;
