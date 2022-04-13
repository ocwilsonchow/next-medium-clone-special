import {
  Flex,
  Input,
  Text,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
  Avatar,
  HStack,
  Box
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSession, signIn, signOut } from "next-auth/react";
import ChatContainer from "../chat/ChatContainer";

const Rightbar = () => {
  const { data: session } = useSession();

  return (
    <VStack borderLeftWidth="0.5px" p={2} spacing={6} w="350px">
      <Flex h="100%" flexDir="column" justifyContent="space-between" w="full">
        <Box>
          <Flex flexDir="column" px={4} pt={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              /
              <Input type="tel" placeholder="Search" />
            </InputGroup>
          </Flex>
          <ChatContainer />
        </Box>
        <Flex flexDir="column" p={4}>
          {session && (
            <>
              <HStack py={4}>
                <Avatar src={session.user.image} />
                <Text py={4} fontSize="sm" isTruncated>
                  Signed in as {session.user.email}
                </Text>
              </HStack>
              <Button onClick={() => signOut()}>Sign out</Button>
            </>
          )}
          {!session && (
            <>
              <Text py={4}>Not signed in</Text>
              <Button onClick={() => signIn()}>Sign in</Button>
            </>
          )}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Rightbar;
