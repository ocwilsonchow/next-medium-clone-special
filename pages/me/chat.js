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

const PageChatroom = () => {
  const { chatPageMounted, setChatPageMounted } = useChat();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>Public</Tab>
        <Tab>Private</Tab>
      </TabList>
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

export default PageChatroom;
