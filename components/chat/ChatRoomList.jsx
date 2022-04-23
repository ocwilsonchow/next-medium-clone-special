import { useState, useEffect } from "react";
import {
  Fade,
  Flex,
  LinkBox,
  Text,
  Spinner,
  Box,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import { useSession } from "next-auth/react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import CreateRoomBtn from "../supabaseChat/CreateRoomBtn";
import groq from "groq";
import { readClient } from "../../lib/sanity";

const fetcher = (url) => fetch(url).then((res) => res.json());
const sanityFetcher = (url) => readClient.fetch(url).then((res) => res);

const ChatRoomList = () => {
  const { onPublicChat, pushOnlineUser, removeOnlineUser } = useChat();
  const router = useRouter();
  const { room: params } = router.query;
  const { data, error } = useSWR("/api/chat", fetcher);
  const { data: session } = useSession();
  const key = groq`*[_type == "onlineUsers" ]`;
  const { data: onlineUsers, error: userError, mutate } = useSWR(key, sanityFetcher);

  console.log(onlineUsers);

  useEffect(() => {
    listenToOnlineStatus()
    pushOnlineUser();
    return () => {
      removeOnlineUser();
    };
  }, []);


  const listenToOnlineStatus = () => {
    console.log('listening')
    const query = `
    *[_type == "onlineUsers" ]`
    const subscription = readClient.listen(query).subscribe((update) => {
     const message = update.result;
     mutate()
    });
  };




  if (!data)
    return (
      <Flex flexDir="column" w="full" p={20}>
        <Spinner />
      </Flex>
    );
  return (
    <Fade in>
      <Flex flexDir="column" justifyContent="space-between" p={4}>
        <Flex flexDir="column" my={4}>
          <Text fontSize="lg" fontWeight="medium">
            Public Channels
          </Text>
          <CreateRoomBtn />
          <Tooltip label={`In Sanity chat room: ${onlineUsers?.length  }`}>
            <Flex
              overflow="auto"
              borderWidth="0.5px"
              h="60px"
              borderRadius="base"
              p={1}
              alignItems="center"
            >
              {onlineUsers?.map((user) => (
                <Fade in key={user.id}>
                  <Avatar src={user.userImage} />
                </Fade>
              ))}
              {onlineUsers?.length === 0 && (
                <Text p={2} fontSize="sm">
                  There is no registered user online yet
                </Text>
              )}
            </Flex>
          </Tooltip>
        </Flex>

        <Flex flexDir="column" my={4} h="calc(100vh - 270px)" overflow="auto">
          <Link href="/chat/public">
            <LinkBox
              my={1.5}
              py={3}
              px={4}
              borderWidth="0.5px"
              borderColor={onPublicChat && "green.500"}
              borderRadius="base"
              _hover={{ color: "blue.500" }}
              cursor="pointer"
            >
              <Text fontWeight="medium" color={onPublicChat && "green.500"}>
                🪐 Sanity Chat
              </Text>
            </LinkBox>
          </Link>

          {data?.map((room) => (
            <Link href={`/chat/${room.id}`} key={room.id}>
              <LinkBox
                my={1.5}
                py={3}
                px={4}
                borderWidth="0.5px"
                borderRadius="base"
                _hover={{ color: "blue.500" }}
                borderColor={room.id === params && "green.500"}
                cursor="pointer"
              >
                <Text
                  fontWeight="medium"
                  color={room.id === params && "green.500"}
                >
                  {room.name}
                </Text>
              </LinkBox>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Fade>
  );
};

export default ChatRoomList;
