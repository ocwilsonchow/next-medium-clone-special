import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Text,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSession, signIn, signOut } from "next-auth/react";
import ChatContainer from "../chat/ChatContainer";
import { AiOutlineSend } from "react-icons/ai";

const Rightbar = () => {
  const { data: session } = useSession();
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    console.log(messageInput);
  }, [messageInput]);

  return (
    <VStack borderLeftWidth="0.5px" p={2} spacing={6} w="350px">
      <Flex h="100%" flexDir="column" justifyContent="space-between" w="full">
        <Box>
          <Flex flexDir="column" px={4} pt={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input type="tel" placeholder="Search" />
            </InputGroup>
          </Flex>
          <ChatContainer />
        </Box>
        <Flex flexDir="column" p={4}>
          <InputGroup>
            <InputRightElement>
              <IconButton variant="ghost" icon={<AiOutlineSend />} />
            </InputRightElement>
            <Input
              type="tel"
              placeholder="Message"
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </InputGroup>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Rightbar;
