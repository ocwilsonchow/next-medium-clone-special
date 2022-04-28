import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import ChatContainer from "../../components/supabaseChat/ChatContainer";
import MessageInput from "../../components/supabaseChat/MessageInput";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PageDynamicRoom = () => {
  const { setChatPageMounted } = useChat();
  const { data: session } = useSession();
  const router = useRouter();
  const { room } = router.query;
  const {
    data: thisRoom,
    error,
    mutate,
  } = useSWR(room ? `/api/chat/${room}` : null, fetcher, { refreshInterval: 1000 });

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Flex flexDir="column" position="relative">
      <Box p={4} flexDir="column" w="full">
        <Center>
          {thisRoom && <Tag mx={2}>{thisRoom?.name}</Tag>}
          <HStack>{}</HStack>
        </Center>
        <Flex flexDir="column" h="calc(100vh - 200px)" overflow="auto">
          {thisRoom && <ChatContainer messages={thisRoom.messages} />}
          {!thisRoom && (
            <Center p={4}>
              <Spinner />
            </Center>
          )}
        </Flex>
      </Box>
      <Flex position="sticky" bottom={4} w="full">
        <MessageInput roomId={thisRoom?.id} />
      </Flex>
    </Flex>
  );
};

export default PageDynamicRoom;
