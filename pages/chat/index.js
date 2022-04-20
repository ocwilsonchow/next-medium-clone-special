import { Flex, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

const PageChatEngine = () => {
  const { data: session } = useSession();



  return (
    <Flex flexDir="column" rowGap={4} alignItems="center" position="relative">


    </Flex>
  );
};

export default PageChatEngine;
