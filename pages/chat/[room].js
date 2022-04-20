import { useEffect } from "react";
import {
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import { useRouter } from "next/router";
import ChatContainer from "../../components/supabaseChat/ChatContainer";
import { AiOutlineSend } from "react-icons/ai";
import MessageInput from "../../components/supabaseChat/MessageInput";

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
        Welcome to{" "}
        <Text fontWeight="bold" display="inline-block">
          {room}
        </Text>
      </Box>
      <Flex flexDir="column">
        <ChatContainer />
        <MessageInput />
      </Flex>
    </Flex>
  );
};

export default PageDynamicRoom;
