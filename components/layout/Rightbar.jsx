import { Flex } from "@chakra-ui/react";
import ChatContainer from "../chat/ChatContainer";
import { useChat } from "../../context/ChatContext";
import ChatRoomList from "../chat/ChatRoomList";

const Rightbar = () => {
  const { chatPageMounted, setChatPageMounted } = useChat();
  return (
    <Flex flexDir="column" borderLeftWidth="0.5px" p={2} w="350px">
      {!chatPageMounted && <ChatContainer />}
      {chatPageMounted && <ChatRoomList />}
    </Flex>
  );
};

export default Rightbar;
