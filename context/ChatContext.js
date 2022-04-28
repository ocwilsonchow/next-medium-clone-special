import { useState, createContext, useContext, useEffect } from "react";
import {
  apiCreatePublicChatMessages,
  apiPushOnlineUser,
  apiRemoveOnlineUser,
  apiLikeAMessage,
} from "../lib/chat";
import { useSession } from "next-auth/react";
import { readClient } from "../lib/sanity";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import groq from "groq";

const ChatContext = createContext();
const fetcher = (query) => readClient.fetch(query).then();
const key = groq`*[_type == "chatMessage"]  | order(createdAt asc) {
  createdAt,
  _id,
  message,
  userEmail,
  username,
  userImage
}`;

export function ChatProvider({ children }) {
  const { data: session } = useSession();
  const [messageInput, setMessageInput] = useState("");
  const [anonymousId, setAnonymousId] = useState();
  const [chatPageMounted, setChatPageMounted] = useState(false);
  const [onPublicChat, setOnPublicChat] = useState();
  const { data, mutate } = useSWR(key, fetcher);

  useEffect(() => {
    listenToChat();
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
  }, [session]);

  const listenToChat = () => {
    const query = key
    const subscription = readClient.listen(query).subscribe((update) => {
      mutate();
    });
  };

  // Like a message
  const likeAMessage = async (messageId) => {
    console.log("liking");
    await apiLikeAMessage(session, anonymousId, messageId);
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
        "",
      username: session?.user.name || "anonymous",
      chatroom: {
        _ref: "b1c0ca9b-3e12-4c3d-9fc0-6f4fe3a154f5",
        _type: "reference",
      },
    };

    // TODO make it optimistic update

    try {
      setMessageInput("");
      await apiCreatePublicChatMessages(chatMessageDoc);
      mutate();
    } catch (error) {
      setMessageInput("");
      console.error(error);
    }
  };

  // Push Online User
  const pushOnlineUser = async () => {
    try {
      await apiPushOnlineUser(session);
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Online User
  const removeOnlineUser = async () => {
    try {
      await apiRemoveOnlineUser(session);
    } catch (err) {
      console.log(error);
    }
  };

  const contextData = {
    createPublicMessage,
    setMessageInput,
    messageInput,
    anonymousId,
    chatPageMounted,
    setChatPageMounted,
    onPublicChat,
    setOnPublicChat,
    pushOnlineUser,
    removeOnlineUser,
    likeAMessage,
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
