import { Flex, Text } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useSession, signIn, signOut } from "next-auth/react";
import Auth from "../../components/chatEngine/Auth";
import Authenticated from "../../components/chatEngine/Authenticated"

const PageChatEngine = () => {
  const { data: session } = useSession();



  return (
    <Flex flexDir="column" rowGap={4} alignItems="center" position="relative">


    </Flex>
  );
};

export default PageChatEngine;
