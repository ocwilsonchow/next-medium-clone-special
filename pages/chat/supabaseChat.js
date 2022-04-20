import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useSWR from "swr";

import { useChat } from "../../context/ChatContext";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PagePrivateChat = () => {
  const { setChatPageMounted } = useChat();

  // const {  data, error } = useSWR("/api/prisma/users", fetcher);
  const { data, error } = useSWR("/api/prisma/chatrooms", fetcher);

  console.log(data);

  useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  return (
    <Flex>
      <Text p={4} fontSize="2xl" fontWeight="bold">
        Supabase Chat{" "}
      </Text>
    </Flex>
  );
};

export default PagePrivateChat;
