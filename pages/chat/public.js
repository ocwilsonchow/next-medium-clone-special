import { useEffect } from "react";
import {
  Center,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useChat } from "../../context/ChatContext";
import LgPublicChat from "../../components/chat/PublicChat";
import PrivateChat from "../../components/chat/PrivateChat";

const PagePublicChatroom = () => {
  const { setChatPageMounted } = useChat();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Tabs>
      <TabPanels>
        <TabPanel>
          <LgPublicChat />
        </TabPanel>
        <TabPanel>
          <PrivateChat />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PagePublicChatroom;
