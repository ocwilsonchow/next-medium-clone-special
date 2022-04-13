import { useContext, useState } from "react";
import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useSession } from "next-auth/react";
import moment from "moment";

const PublicChat = () => {
  const { publicMessages } = useChat();
  const { data: session } = useSession();
  console.log(session);

  console.log(publicMessages);

  return (
    <Flex flexDir="column" py={4}>
      {session && <Text></Text>}
      {publicMessages?.map((msg) => (
        <Box key={msg._id} borderWidth="0.5px" my={1} p={2}>
          <HStack>
            <Avatar src={msg.userImage} size="sm" />
            <Box>
              <Text>{msg.message}</Text>
              <Text fontSize="xs">{moment(msg.createdAt).calendar()}</Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </Flex>
  );
};

export default PublicChat;
