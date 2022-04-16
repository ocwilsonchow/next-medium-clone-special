import { Flex, Text, HStack, Avatar, Button, Box, Fade } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

const PageSettings = () => {
  const { data: session, status } = useSession();
  return (
    <Fade in>
      <Flex flexDir="column" py={6} maxW="800px">
      <Text fontWeight="bold" fontSize="4xl">
        Settings
      </Text>
      {session && (
        <Box>
          <HStack py={4}>
            <Avatar src={session.user.image} />
            <Text py={8} fontSize="sm" isTruncated>
              Signed in as {session.user.email}
            </Text>
          </HStack>
          <Button colorScheme="red" onClick={() => signOut()}>Sign out</Button>
        </Box>
      )}
      {!session && (
        <Box>
          <Text py={8}>Not signed in</Text>
          <Button colorScheme="twitter" onClick={() => signIn()}>Sign in</Button>
        </Box>
      )}
    </Flex>
    </Fade>
  );
};

export default PageSettings;
