import { Fade, Flex, LinkBox, Text, VStack, Skeleton } from "@chakra-ui/react";
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
      <Flex flexDir="column" w="full" py={20} rowGap={3} >
        <Skeleton mb={5} borderWidth="1px" h="30px" w="300px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
        <Skeleton borderWidth="1px" h="40px" w="320px" />
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
                  borderColor={room.id === params && "green.500"}
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
