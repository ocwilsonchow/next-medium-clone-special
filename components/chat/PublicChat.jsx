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

  // console.log(session, publicMessages);

  return (
    <Flex flexDir="column" py={2}>
      {session && <Text></Text>}
      {publicMessages?.map((msg) => (
        <Box key={msg._id} py={2}>
          <HStack
            flexDir={
              (session.user.email === msg.userEmail && "row-reverse") || "row"
            }
          >
            <Avatar src={msg.userImage} alt="" boxSize="40px" />
            <Box px={1}>
              <HStack
                mb={1}
                justifyContent={
                  (session.user.email === msg.userEmail && "flex-end") ||
                  "flex-start"
                }
              >
                <Text fontSize="xs" fontWeight="medium">
                  {msg.username}
                </Text>
                <Text fontSize="10px">{moment(msg.createdAt).calendar()}</Text>
              </HStack>
              <Flex
                w="full"
                justifyContent={
                  (session.user.email === msg.userEmail && "flex-end") ||
                  "flex-start"
                }
              >
                <Tag
                  colorScheme={
                  (session.user.email === msg.userEmail && "green") ||
                  "twitter"
                }
                  px={3}
                  py={2}
                  borderRadius="xl"
                  fontSize="sm"
                >
                  {msg.message}
                </Tag>
              </Flex>
            </Box>
          </HStack>
        </Box>
      ))}
    </Flex>
  );
};

export default PublicChat;
