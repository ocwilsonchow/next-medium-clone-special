import { Flex } from "@chakra-ui/react";
import ChatContainer from "../chat/ChatContainer";
import { useChat } from "../../context/ChatContext";

const Rightbar = () => {
  const { chatPageMounted, setChatPageMounted } = useChat();
  return (
    <Flex flexDir="column" borderLeftWidth="0.5px" p={2} w="350px">
      {!chatPageMounted && <ChatContainer />}
    </Flex>
  );
};

export default Rightbar;
