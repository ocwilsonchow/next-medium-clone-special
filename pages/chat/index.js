import { Center, Flex, Tag, Text, VStack } from "@chakra-ui/react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from '../../components/getstream/index'


const apiKey = "93myuqwykf99";
const client = StreamChat.getInstance(apiKey)

const PageChatHome = () => {
  return (
    <Flex flexDir="column" w="full">
      <Center p={6}>
        <Tag fontWeight="bold" fontSize="2xl">
          Welcome to the Big Chatroom!
        </Tag>
      </Center>
     <Flex>
        <Chat client={client} theme="team dark">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
     </Flex>
    </Flex>
  );
};

export default PageChatHome;
