import { useState, useEffect } from "react";
import { useChat } from "../../context/ChatContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { useChatEngine } from "../../context/ChatEngineContext";
import { Flex } from "@chakra-ui/layout";

import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const PagePrivateChat = () => {
  const { data: session } = useSession();
  const { setChatPageMounted } = useChat();
  const [showChat, setShowChat] = useState(false);
  const { secret } = useChatEngine();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;

  console.log(process.env.NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID)

  return (
    <Flex w="full">
      <ChatEngine
        height="calc(100vh -200px)"
        width="100%"
        projectID={process.env.NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID}
        userName={session.user.name}
        userSecret={secret}
      />
    </Flex>
  );
};

export default PagePrivateChat;
