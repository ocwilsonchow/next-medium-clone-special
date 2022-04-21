import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useChat } from "../../context/ChatContext";


const PageChatEngine = () => {
  const { data: session } = useSession();
  const { setChatPageMounted } = useChat();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Flex
      flexDir="column"
      rowGap={4}
      alignItems="center"
      position="relative"
    >Supabase Chat</Flex>
  );
};

export default PageChatEngine;
