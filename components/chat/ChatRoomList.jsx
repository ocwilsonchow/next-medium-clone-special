import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Fade,
  Flex,
  LinkBox,
  Text,
  Tooltip,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useChat } from "../../context/ChatContext";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatRoomList = () => {
  const { onPublicChat } = useChat();
  const { data, error } = useSWR("/api/chat/index", fetcher);
  console.log(data);

  if (!data) return <div>Loading...</div>
  return (
    <Fade in>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="medium">
          Channels
        </Text>
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
                borderColor={onPublicChat && "green.500"}
                borderRadius="base"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <Text fontWeight="medium" color={onPublicChat && "green.500"}>
                  {room.name}
                </Text>
              </LinkBox>
            </Link>
          ))}
        </Flex>

        <Flex flexDir="column" my={4}>
          <Tooltip label="still working on this">
            <Button borderWidth="0.5px" borderRadius="base">
              <Text fontWeight="medium">Create a new room</Text>
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Fade>
  );
};

export default ChatRoomList;
