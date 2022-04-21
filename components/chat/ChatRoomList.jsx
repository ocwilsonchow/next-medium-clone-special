import {
  Fade,
  Flex,
  LinkBox,
  Text,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import useSWR from "swr";
import CreateRoomBtn from "../supabaseChat/CreateRoomBtn";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatRoomList = () => {
  const { onPublicChat } = useChat();
  const { data, error } = useSWR("/api/chat", fetcher);

    // TODO setup loading skeleton and use SWR SSR

  if (!data)
    return (
      <Flex p={4} w="full">
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
        <Flex flexDir="column" h="100%">
          <Flex flexDir="column" my={4}>
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
                  Public
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
                  cursor="pointer"
                >
                  <Text fontWeight="medium">{room.name}</Text>
                </LinkBox>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Fade>
  );
};

export default ChatRoomList;
