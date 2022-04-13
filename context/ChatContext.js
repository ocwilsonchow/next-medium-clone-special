import { useState, createContext, useContext, useEffect } from "react";
import { apiGetPublicChatMessages } from "../lib/chat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [publicMessages, setPublicMessages] = useState();

  useEffect(() => {
    getPublicMessages()
  }, [])

  // Create user in Sanity
  const getPublicMessages = async () => {
    const data = await apiGetPublicChatMessages()
    setPublicMessages(data)

  };

  const contextData = {
    publicMessages,
    setPublicMessages,
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
