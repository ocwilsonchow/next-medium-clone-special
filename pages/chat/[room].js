import { useEffect } from "react";
import { Box, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useRouter } from "next/router";
import ChatContainer from "../../components/supabaseChat/ChatContainer";
import MessageInput from "../../components/supabaseChat/MessageInput";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PageDynamicRoom = () => {
  const { setChatPageMounted } = useChat();
  const router = useRouter();
  const { room } = router.query;

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Flex flexDir="column">
      <Box>
        Welcome to <Text fontWeight="bold" display="inline-block"></Text>
        <Tag mx={2}>chatID</Tag>
      </Box>
      <Flex flexDir="column" mt={2}>
        <ChatContainer />
        <MessageInput />
      </Flex>
    </Flex>
  );
};

export default PageDynamicRoom;
