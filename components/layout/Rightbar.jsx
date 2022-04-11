import { useEffect }from 'react'
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSession, signIn, signOut } from "next-auth/react";

const Rightbar = () => {
  const { data: session } = useSession();

  return (
    <VStack borderLeftWidth="1px" p={8} h="100vh" spacing={6} w="350px">
      <Flex h="100%" flexDir="column" justifyContent="space-between" w="full">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input type="tel" placeholder="Search" />
        </InputGroup>
        <Flex flexDir="column">
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
