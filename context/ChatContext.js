import { useState, createContext, useContext, useEffect } from "react";
import {
  apiCreatePublicChatMessages,
  apiGetPublicChatMessages,
  apiPushOnlineUser,
  apiRemoveOnlineUser,
  apiLikeAMessage
} from "../lib/chat";
import { useSession } from "next-auth/react";
import { readClient } from "../lib/sanity";
import { v4 as uuidv4 } from "uuid";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { data: session } = useSession();
  const [publicMessages, setPublicMessages] = useState([]);
  const [newPublicMessage, setNewPublicMessage] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [anonymousId, setAnonymousId] = useState();
  const [chatPageMounted, setChatPageMounted] = useState(false);
  const [onPublicChat, setOnPublicChat] = useState();

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
  }, [session]);

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
      userImage,

    }
  `;

    const subscription = readClient.listen(query).subscribe((update) => {
      const message = update.result;
      setNewPublicMessage(message);
    });
  };

  // Like a message
  const likeAMessage = async (messageId) => {
    console.log("liking")
   await apiLikeAMessage(session, anonymousId, messageId)
  }

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
      await apiRemoveOnlineUser(session)
    } catch (err) {
      console.log(error)
    }
  }

  const contextData = {
    publicMessages,
    setPublicMessages,
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
    likeAMessage
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
