import {
  Fade,
  Flex,
  LinkBox,
  Text,
  VStack,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import useSWR from "swr";
import { useRouter } from "next/router";
import CreateRoomBtn from "../supabaseChat/CreateRoomBtn";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatRoomList = () => {
  const { onPublicChat } = useChat();
  const router = useRouter();
  const { room: params } = router.query;
  const { data, error } = useSWR("/api/chat", fetcher);

  // TODO setup loading skeleton and use

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
            Channels
          </Text>
          <CreateRoomBtn />
        </Flex>

        <Flex flexDir="column" my={4} h="calc(100vh - 220px)"  overflow="auto">
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
