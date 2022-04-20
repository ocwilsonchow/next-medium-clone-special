import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import axios from "axios";
import { useChat } from "../../context/ChatContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { useChatEngine } from "../../context/ChatEngineContext";


const Auth = () => {
  const { data: session } = useSession();
  const { setChatPageMounted } = useChat();
  const { secret, setSecret, setAuthenticated } = useChatEngine();

   useEffect(() => {
    setChatPageMounted(true);
    return () => {
      setChatPageMounted(false);
    };
  }, []);

  const createUserOnChatEngine = () => {
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: session.user.name, secret, email: session.user.email },
        {
          headers: {
            "Private-key": process.env.NEXT_PUBLIC_CHAT_ENGINE_PRIVATE_KEY,
          },
        }
      )
      .then((r) => {
        setAuthenticated(true)
        console.log(r)
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!session || secret.length === 0) return;
    createUserOnChatEngine();
  };

  return (
    <Flex
        flexDir="column"
        rowGap={4}
        p={8}
        spacing={3}
        borderWidth="0.5px"
        maxW={400}
        position="relative"
        top="40%"
      >
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          Welcome to Chat Engine
        </Text>

        <FormControl>
          <Box pb={4}>
            <Avatar src={session?.user.image} />
          </Box>
          <FormLabel>Username</FormLabel>
          <Input
            disabled
            placeholder={session?.user.name}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setSecret(e.target.value)}
          />
        </FormControl>

        <Button onClick={(e) => handleSubmit(e)}>Sign up</Button>
      </Flex>
  )
}

export default Auth
