import { useState, useEffect } from "react";
import {
  Fade,
  Flex,
  LinkBox,
  Text,
  Spinner,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import useSWR from "swr";
import { useRouter } from "next/router";
import CreateRoomBtn from "../supabaseChat/CreateRoomBtn";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import StatusBar from "../supabaseChat/StatusBar";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatRoomList = () => {
  const { onPublicChat } = useChat();
  const router = useRouter();
  const { data: session } = useSession();
  const { room: params } = router.query;
  const { data, error } = useSWR("/api/chat", fetcher);

  let userId = session?.user?.id

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
