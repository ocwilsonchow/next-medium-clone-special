import { useState, useEffect } from "react";
import { Box, Center, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useRouter } from "next/router";
import ChatContainer from "../../components/supabaseChat/ChatContainer";
import MessageInput from "../../components/supabaseChat/MessageInput";
import useSWR from "swr";
import { supabaseClient } from "../../lib/supabase";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PageDynamicRoom = () => {
  const { setChatPageMounted } = useChat();
  const router = useRouter();
  const { room } = router.query;
  const {
    data: rooms,
    error,
    mutate,
  } = useSWR("/api/chat", fetcher, { refreshInterval: 500 });

  // Get cached data that belongs to this room
  const thisRoom = rooms?.find((item) => item.id === room);

  useEffect(() => {
    //Listener to chat

    // const chatListener = supabaseClient
    // .from('message')
    // .on("INSERT", (payload) => {
    //   const newMessage = payload.new;
    //   console.log("hihiiii")
    // }).subscribe();

    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
      // chatListener.unsubscribe()
    };
  }, []);

  if (!thisRoom) return <Text p={4}>Loading...</Text>;

  return (
    <Flex flexDir="column" position="relative">
      <Box  p={4} flexDir="column" w="full" >
        <Center>
          <Tag mx={2}>{thisRoom?.name}</Tag>
        </Center>
        <Flex flexDir="column" maxH="calc(100vh - 200px)" overflow="auto">
          <ChatContainer messages={thisRoom.messages} />
        </Flex>
      </Box>
      <Flex position="sticky" bottom={4}  w="full">
        <MessageInput roomId={thisRoom?.id} />
      </Flex>
    </Flex>
  );
};

export default PageDynamicRoom;
