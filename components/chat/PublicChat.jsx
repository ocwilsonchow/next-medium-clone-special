import { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useSession } from "next-auth/react";
import moment from "moment";

const PublicChat = () => {
  const { publicMessages } = useChat();
  const { data: session } = useSession();
  const chatBgColor = useColorModeValue("cyan.400", "cyan.500");

  // console.log(session, publicMessages);

  return (
    <Flex flexDir="column" py={2}>
      {session && <Text></Text>}
      {publicMessages?.map((msg) => (
        <Box key={msg._id} py={2}>
          <HStack>
            <Avatar src={msg.userImage} boxSize="40px" />
            <Box>
              <HStack mb={1}>
                <Text fontSize="xs" fontWeight="medium">{msg.username}</Text>
                <Text fontSize="10px">{moment(msg.createdAt).calendar()}</Text>
              </HStack>
              <Tag
                colorScheme="twitter"
                px={3}
                py={2}
                borderRadius="xl"
                fontSize="sm"
              >
                {msg.message}
              </Tag>
            </Box>
          </HStack>
        </Box>
      ))}
    </Flex>
  );
};

export default PublicChat;
