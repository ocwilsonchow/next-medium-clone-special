import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Fade,
  Flex,
  LinkBox,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext"

const ChatRoomList = () => {
  const { onPublicChat } = useChat()

  return (
    <Fade in>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="medium">
          Channels
        </Text>
        <Flex flexDir="column" my={4}>
          <Link href="/chat/public">
            <LinkBox
              my={1.5}
              py={3}
              px={4}
              borderWidth="0.5px"
              borderColor={onPublicChat && "green.500"}
              borderRadius="base"
              _hover={{ color: "blue.500" }}
              cursor="pointer"
            >
              <Text fontWeight="medium" color={onPublicChat && "green.500"}>Public</Text>
            </LinkBox>
          </Link>
           <Link href="/chat">
            <LinkBox
              my={1.5}
              py={3}
              px={4}
              borderWidth="0.5px"
              borderRadius="base"
              _hover={{ color: "blue.500" }}
              cursor="pointer"
            >
              <Text fontWeight="medium">Chat Engine</Text>
            </LinkBox>
          </Link>

        </Flex>

        <Flex flexDir="column" my={4}>
          <Tooltip label="still working on this">
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
