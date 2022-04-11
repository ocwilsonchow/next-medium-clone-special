import {
  Flex,
  Input,
  Text,
  VStack,
  Button,
  Image,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

const Rightbar = () => {
  const { data: session } = useSession();

  return (
    <VStack borderLeftWidth="1px" p={8} h="100vh" spacing={6} w="300px">
      <Flex flexDir="column" w="full">
        {session && (
          <>
            <HStack>
              <Avatar src={session.user.image} />
              <Text >Signed in as {session.user.email}</Text>
            </HStack>
            <Button onClick={() => signOut()}>Sign out</Button>
          </>
        )}
        {!session && (
          <>
            <Text>Not signed in</Text>
            <Button onClick={() => signIn()}>Sign in</Button>
          </>
        )}
      </Flex>
      <Input borderRadius="full" />
    </VStack>
  );
};

export default Rightbar;
