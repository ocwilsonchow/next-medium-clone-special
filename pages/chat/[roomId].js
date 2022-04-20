import { useState, useEffect } from 'react'
import { useChat } from "../../context/ChatContext";

const PagePrivateChat = () => {
  const { setChatPageMounted } = useChat();

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <div>
    Private Chat Room
    </div>
  )
}

export default PagePrivateChat
