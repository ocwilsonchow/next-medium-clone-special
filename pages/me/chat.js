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
import PublicChat from "../../components/chat/PublicChat";
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
    <Flex flexDir="column" zIndex={0}>
      <Tabs overflow="auto">
        <TabList>
          <Tab>Public</Tab>
          <Tab>Private</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PublicChat />
          </TabPanel>
          <TabPanel>
            <PrivateChat />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default PageChatroom;
