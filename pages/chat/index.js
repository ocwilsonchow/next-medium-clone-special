import { Flex, Text } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useSession, signIn, signOut } from "next-auth/react";
import Auth from "../../components/chatEngine/Auth";
import Authenticated from "../../components/chatEngine/Authenticated"
import { useChatEngine } from "../../context/ChatEngineContext";

const PageChatEngine = () => {
  const { data: session } = useSession();
  const { authenticated } = useChatEngine()

  return (
    <Flex flexDir="column" rowGap={4} alignItems="center" position="relative">
        {!authenticated &&  <Auth />}
        {authenticated && <Authenticated />}
    </Flex>
  );
};

export default PageChatEngine;
