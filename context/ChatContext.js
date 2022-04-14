import { useState, createContext, useContext, useEffect } from "react";
import {
  apiCreatePublicChatMessages,
  apiGetPublicChatMessages,
} from "../lib/chat";
import { useSession } from "next-auth/react";
import { client } from "../lib/sanity";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [publicMessages, setPublicMessages] = useState();
  const [messageInput, setMessageInput] = useState();
  const { data: session } = useSession();
  console.log(publicMessages);
  useEffect(() => {
    getPublicMessages();
  }, []);

  useEffect(() => {
    console.log(messageInput);
  }, [messageInput]);

  // Create user in Sanity
  const getPublicMessages = async () => {
    const data = await apiGetPublicChatMessages();
    setPublicMessages(data);
  };

  // Create public message
  const createPublicMessage = async () => {
    const chatMessageDoc = {
      _type: "chatMessage",
      message: messageInput,
      createdAt: new Date().toISOString(),
      userEmail: session?.user.email || "",
      userImage:
        session?.user.image ||
        "https://lab-restful-api.s3.ap-northeast-2.amazonaws.com/profile.jpeg",
      username: session?.user.name || "anonymous",
      chatroom: {

        _ref: "b1c0ca9b-3e12-4c3d-9fc0-6f4fe3a154f5",
        _type: "reference",
      },
    };

    try {
      await apiCreatePublicChatMessages(chatMessageDoc);
    } catch (error) {
      console.error(error);
    }
  };

  const contextData = {
    publicMessages,
    setPublicMessages,
    createPublicMessage,
    setMessageInput,
    messageInput,
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
