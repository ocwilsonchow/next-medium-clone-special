import {
  Box,
  Button,
  Fade,
  Flex,
  LinkBox,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";

const ChatRoomList = () => {
  let roomId = ["sdjfhks", "sdjfhdf", "sdffhks"];

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
              borderRadius="base"
              _hover={{ color: "blue.500" }}
              cursor="pointer"
            >
              <Text fontWeight="medium">Public</Text>
            </LinkBox>
          </Link>
          {roomId?.map((room) => (
            <Link href={`/chat/${room}`}>
              <LinkBox
                my={1.5}
                py={3}
                px={4}
                borderWidth="0.5px"
                borderRadius="base"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <Text fontWeight="medium">Private #{room}</Text>
              </LinkBox>
            </Link>
          ))}
        </Flex>

        <Flex flexDir="column" my={4}>
          <Tooltip label="Hey! Wilson is still working on this feature...">
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
