import { useState, createContext, useContext, useEffect } from "react";
import {
  apiCreatePublicChatMessages,
  apiGetPublicChatMessages,
  apiListenPublicChatMessages,
} from "../lib/chat";
import { useSession } from "next-auth/react";
import { readClient } from "../lib/sanity";
import { v4 as uuidv4 } from "uuid";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [publicMessages, setPublicMessages] = useState([]);
  const [newPublicMessage, setNewPublicMessage] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const { data: session } = useSession();
  const [anonymousId, setAnonymousId] = useState();
  const [chatPageMounted, setChatPageMounted] = useState(false)

  useEffect(() => {
    getPublicMessages();
    listenToChat();
    return setPublicMessages([]);
  }, []);

  useEffect(() => {
// Generate an anonymous ID if not signed in
    if (!session && !anonymousId) {
      setAnonymousId(uuidv4());
    }

    // If signed in, clear the anonymous ID
    if (session && anonymousId) {
      setAnonymousId();
    }
  }, [session])

  useEffect(() => {
    setPublicMessages([...publicMessages, newPublicMessage]);
  }, [newPublicMessage]);

  const listenToChat = () => {
    const query = `
    *[_type == "chatMessage" ] {
      chatroom->,
      chatroom,
      message,
      createdAt,
      _id,
      username,
      userEmail,
      userImage
    }
  `;

    const subscription = readClient.listen(query).subscribe((update) => {
      const message = update.result;
      setNewPublicMessage(message);
    });
  };

  // Get public messages from Sanity
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
      userEmail: session?.user.email || anonymousId,
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
      setMessageInput("");
      await apiCreatePublicChatMessages(chatMessageDoc);
    } catch (error) {
      setMessageInput("");
      console.error(error);
    }
  };

  const contextData = {
    publicMessages,
    setPublicMessages,
    createPublicMessage,
    setMessageInput,
    messageInput,
    anonymousId,
    chatPageMounted,
    setChatPageMounted
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
