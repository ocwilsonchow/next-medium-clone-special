import { useState, useEffect } from "react";
import { Fade, Flex, LinkBox, Text, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import useSWR from "swr";
import { useRouter } from "next/router";
import CreateRoomBtn from "../supabaseChat/CreateRoomBtn";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatRoomList = () => {
  const { onPublicChat } = useChat();
  const router = useRouter();
  const { data: session } = useSession();
  const { room: params } = router.query;
  const { data, error } = useSWR("/api/chat", fetcher);
  const [statusInterval, setStatusInterval] = useState("");
  const { data: onlineUsers } = useSWR("/api/chat/status", fetcher, {
    refreshInterval: 1000,
  });

  console.log(onlineUsers);

  // useEffect(() => {
  //   setStatusInterval(
  //     setInterval(() => {
  //       if (!session) return;
  //       axios({
  //         method: "PUT",
  //         url: `/api/chat/status/${session?.user.id}`,
  //         data: { isOnline: true },
  //       });
  //     }, 5000)
  //   );

  //   return () => {
  //     clearInterval(statusInterval);
  //     if (!session) return;
  //     axios({
  //       method: "PUT",
  //       url: `/api/chat/status/${session?.user.id}`,
  //       data: { isOnline: false },
  //     });
  //   };
  // }, []);

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

        <Flex flexDir="column" my={4} h="calc(100vh - 255px)" overflow="auto">
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

          {data.map((room) => (
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
