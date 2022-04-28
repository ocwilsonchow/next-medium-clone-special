import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import { useChat } from "../../context/ChatContext";
import { Avatar, Flex, Text, AvatarBadge, Fade } from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const StatusBar = ({ userId }) => {
  // const { data, error, mutate } = useSWR("/api/chat/status", fetcher);
  // console.log(data);

  useEffect(() => {
    axios({
      method: "PUT",
      url: `/api/chat/status/${userId}`,
      data: { isOnline: true },
    });
    mutate();
    return () => {
      axios({
        method: "PUT",
        url: `/api/chat/status/${userId}`,
        data: { isOnline: false },
      });
    };
  }, []);

  return (
    <Flex h="57px" overflow="auto" py={1}>
      {data?.map((user, i) => (
        <Fade in key={i}>
          <Avatar src={user.image} size="md" >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Fade>
      ))}
    </Flex>
  );
};

export default StatusBar;
