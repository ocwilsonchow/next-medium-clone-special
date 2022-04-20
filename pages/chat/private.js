import { useState, useEffect } from "react";
import useSWR from 'swr'

import { useChat } from "../../context/ChatContext";


const fetcher = (...args) => fetch(...args).then(res => res.json())


const PagePrivateChat = () => {
  const { setChatPageMounted } = useChat();

 const { data, error } = useSWR('/api/users', fetcher)


console.log(data)



  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return <div>Private Chat Room</div>;
};

export default PagePrivateChat;
