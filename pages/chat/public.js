import { useEffect } from "react";
import { Center, Flex } from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import LgPublicChat from "../../components/chat/LgPublicChat";

const PagePublicChatroom = () => {
  const { setChatPageMounted } = useChat();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return <LgPublicChat />;
};

export default PagePublicChatroom;
