import { useEffect } from "react";
import { Box, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useRouter } from "next/router";
import ChatContainer from "../../components/supabaseChat/ChatContainer";
import MessageInput from "../../components/supabaseChat/MessageInput";
import useSWR from "swr";

const PageDynamicRoom = () => {
  const { setChatPageMounted } = useChat();
  const router = useRouter();
  const { room } = router.query;

  const { data, error, isLoading } = useSWR("/api/prisma/chatRoom");
  console.log(data);

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  const roomInfo = data.find((item) => item.id === room);
  console.log(roomInfo);

  return (
    <Flex flexDir="column">
      <Box>
        Welcome to{" "}
        <Text fontWeight="bold" display="inline-block">
          {roomInfo.name}
        </Text>
        <Tag mx={2}>#{room}</Tag>
      </Box>
      <Flex flexDir="column" mt={2}>
        <ChatContainer />
        <MessageInput />
      </Flex>
    </Flex>
  );
};

export default PageDynamicRoom;
